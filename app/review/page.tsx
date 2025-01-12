"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Star } from 'lucide-react';

interface ReviewData {
    rating: number;
    review: string;
}

interface SubmissionState {
    isSubmitting: boolean;
    isError: boolean;
    errorMessage: string;
}

const Review: React.FC = () => {
    const [rating, setRating] = useState<number>(0);
    const [hover, setHover] = useState<number>(0);
    const [review, setReview] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [submissionState, setSubmissionState] = useState<SubmissionState>({
        isSubmitting: false,
        isError: false,
        errorMessage: '',
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setSubmissionState({ ...submissionState, isSubmitting: true });

        if (rating === 0) {
            setSubmissionState({
                isSubmitting: false,
                isError: true,
                errorMessage: 'Please select a rating',
            });
            return;
        }

        if (review.trim().length < 10) {
            setSubmissionState({
                isSubmitting: false,
                isError: true,
                errorMessage: 'Please write a review with at least 10 characters',
            });
            return;
        }

        try {
            // Here you would typically send the data to your backend
            const reviewData: ReviewData = { rating, review };
            console.log(reviewData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitted(true);
            setSubmissionState({
                isSubmitting: false,
                isError: false,
                errorMessage: '',
            });
            // Reset form
            setRating(0);
            setReview('');
        } catch (error) {
            console.log(error);
            setSubmissionState({
                isSubmitting: false,
                isError: true,
                errorMessage: 'Failed to submit review. Please try again.',
            });
        }
    };

    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setReview(e.target.value);
        // Reset error state when user starts typing
        if (submissionState.isError) {
            setSubmissionState({
                ...submissionState,
                isError: false,
                errorMessage: '',
            });
        }
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[300px] p-6">
                <div className="bg-green-100 rounded-lg p-6 text-center">
                    <h2 className="text-xl font-semibold text-green-700 mb-2">
                        Thank you for your review!
                    </h2>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                        type="button"
                    >
                        Write Another Review
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="w-full">
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
                    Add Your Review
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    Share your thoughts and experience
                </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="flex flex-col items-center space-y-2">
                    <p className="text-lg font-medium">Your Rating</p>
                    <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className="focus:outline-none"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                            >
                                <Star
                                    size={32}
                                    className={`transition-colors ${star <= (hover || rating)
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-gray-300'
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                    {submissionState.isError && rating === 0 && (
                        <p className="text-red-500 text-sm mt-1">
                            {submissionState.errorMessage}
                        </p>
                    )}
                </div>

                <div className="w-full">
                    <label htmlFor="review" className="block text-lg font-medium mb-2">
                        Your Review
                    </label>
                    <textarea
                        id="review"
                        rows={5}
                        value={review}
                        onChange={handleTextAreaChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none ${submissionState.isError && review.trim().length < 10
                                ? 'border-red-500'
                                : 'border-gray-300'
                            }`}
                        placeholder="Write your review here..."
                    />
                    {submissionState.isError && review.trim().length < 10 && (
                        <p className="text-red-500 text-sm mt-1">
                            {submissionState.errorMessage}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-color1 text-white font-medium rounded-lg hover:bg-color1 transition-colors disabled:bg-gray-400"
                    disabled={submissionState.isSubmitting || !rating || !review.trim()}
                >
                    {submissionState.isSubmitting ? 'Submitting...' : 'Submit Review'}
                </button>
            </form>
        </div>
    );
};

export default Review;