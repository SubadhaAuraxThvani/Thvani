'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import axios from 'axios';

interface User {
    full_name: string;
    email: string;
    phone_number: string;
    is_verified: boolean;
}

interface VerificationState {
    status: 'idle' | 'verifying' | 'success' | 'error';
    message: string;
    user?: Omit<User, 'password'>;
    isAlreadyVerified?: boolean;
}

interface ApiResponse {
    success: boolean;
    message: string;
    user?: Omit<User, 'password'>;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function VerifyEmail() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [verificationState, setVerificationState] = useState<VerificationState>({
        status: 'idle',
        message: 'Initializing verification...'
    });

    useEffect(() => {
        const verifyEmail = async () => {
            const token = searchParams.get('token');

            if (!token) {
                setVerificationState({
                    status: 'error',
                    message: 'Verification token is missing. Please check your verification email and try again.',
                });
                return;
            }

            setVerificationState({
                status: 'verifying',
                message: 'Verifying your email address...'
            });

            try {
                const response = await axios.get<ApiResponse>(`${API_BASE_URL}/auth/verify-email`, {
                    params: { token },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const { success, message, user } = response.data;

                // Check if the message indicates already verified
                const isAlreadyVerified = message?.toLowerCase().includes('already verified');

                if (success || isAlreadyVerified) {
                    setVerificationState({
                        status: 'success',
                        message: isAlreadyVerified ?
                            'Your email has already been verified. You can now log in.' :
                            'Email verified successfully! You can now log in.',
                        user,
                        isAlreadyVerified
                    });

                    // Store verification status
                    localStorage.setItem('emailVerified', 'true');

                    // Redirect to login after success message
                    setTimeout(() => {
                        router.push('/login');
                    }, 3000);
                } else {
                    throw new Error(message || 'Verification failed');
                }
                
            } 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            catch (error: any) {
                console.error('Verification error:', error);

                // Check if the error message indicates already verified
                const errorMessage = error.response?.data?.message || error.message;
                const isAlreadyVerified = errorMessage?.toLowerCase().includes('already verified');

                if (isAlreadyVerified) {
                    setVerificationState({
                        status: 'success',
                        message: 'Your email has already been verified. You can now log in.',
                        isAlreadyVerified: true
                    });

                    // Redirect to login after 3 seconds
                    setTimeout(() => {
                        router.push('/login');
                    }, 3000);
                } else {
                    setVerificationState({
                        status: 'error',
                        message: errorMessage || 'Email verification failed. Please try again.'
                    });
                }
            }
        };

        verifyEmail();
    }, [searchParams, router]);

    const handleLoginClick = () => {
        router.push('/login');
    };

    const handleSignupClick = () => {
        router.push('/signup');
    };

    const handleTryAgain = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <h1 className="text-2xl font-bold text-center">Email Verification</h1>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center space-y-4">
                        {/* Loading Spinner */}
                        {verificationState.status === 'verifying' && (
                            <div className="flex flex-col items-center space-y-2">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
                                <p className="text-gray-600 text-center">{verificationState.message}</p>
                            </div>
                        )}

                        {/* Success State */}
                        {verificationState.status === 'success' && (
                            <div className="w-full">
                                <Alert className="bg-green-50 border-green-200">
                                    <AlertDescription className="text-green-800">
                                        {verificationState.message}
                                    </AlertDescription>
                                </Alert>

                                {verificationState.user && !verificationState.isAlreadyVerified && (
                                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                        <h3 className="font-medium text-gray-900 mb-2">Account Details</h3>
                                        <div className="space-y-1 text-sm text-gray-600">
                                            <p>Name: {verificationState.user.full_name}</p>
                                            <p>Email: {verificationState.user.email}</p>
                                        </div>
                                    </div>
                                )}

                                <p className="text-sm text-gray-500 text-center mt-4">
                                    Redirecting to login page...
                                </p>

                                <Button
                                    onClick={handleLoginClick}
                                    className="w-full mt-4"
                                >
                                    Go to Login Now
                                </Button>
                            </div>
                        )}

                        {/* Error State */}
                        {verificationState.status === 'error' && (
                            <div className="w-full space-y-4">
                                <Alert variant="destructive">
                                    <AlertDescription>
                                        {verificationState.message}
                                    </AlertDescription>
                                </Alert>

                                <div className="space-y-2">
                                    <Button
                                        onClick={handleTryAgain}
                                        className="w-full"
                                    >
                                        Try Again
                                    </Button>
                                    <Button
                                        onClick={handleSignupClick}
                                        variant="outline"
                                        className="w-full"
                                    >
                                        Sign Up Again
                                    </Button>
                                    <Button
                                        onClick={handleLoginClick}
                                        variant="ghost"
                                        className="w-full"
                                    >
                                        Go to Login
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}