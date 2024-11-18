import React from 'react';

interface PageProps {
    params: {
        productId: string;
    };
}

export default function Page({ params }: PageProps) {
    return (
        <div>page {params.productId}</div>
    );
}
