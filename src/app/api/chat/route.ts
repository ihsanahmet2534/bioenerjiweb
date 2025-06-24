import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const systemPrompt =
    'Sen bir psikolog web sitesinde çalışan, sıcak kanlı, empatik ve destekleyici bir asistansın. Kullanıcıya kendini iyi hissettirecek, kısa ve samimi yanıtlar ver.';

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // veya gpt-4, gpt-4o, gpt-4.1 erişiminiz varsa
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      max_tokens: 120,
      temperature: 0.8,
    });

    const reply = completion.choices?.[0]?.message?.content?.trim() || 'Üzgünüm, şu anda yardımcı olamıyorum.';
    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error('OpenAI SDK error:', err); // <-- Hata detayını terminalde gösterir
    return NextResponse.json({ reply: 'Üzgünüm, şu anda yardımcı olamıyorum.', error: String(err) }, { status: 500 });
  }
}