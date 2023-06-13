'use client'
import { useParams } from 'next/navigation'
export default function ProductId() {
    const params = useParams()
    return (
        <div>
            <h1>PRODUTO - {JSON.stringify(params)}</h1>
        </div>
    )
}