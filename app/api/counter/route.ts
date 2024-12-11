import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
    const body = await request.json();
    // 요청 처리 로직 추가
    return NextResponse.json({ message: 'Success', data: body });
}
