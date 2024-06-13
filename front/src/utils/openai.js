import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const prompt = (question, baseAnswer, userAnswer) => `
  I would answer the prompt "${question}" with the following answer:
  "${userAnswer}"

  The correct answer for the prompt was the following:
  "${baseAnswer}"

  Is my answer to the prompt correct and complete? If it is essentially right (it doesn't have to match exactly), say "Correct". If it isn't, your answer must comply with the following rules:
  1. Explain as briefly as possible why my answer is wrong or what is it missing.
  2. Begin your answer with "Incorrect.", followed by your explanation.
  3. Write your explanation in the same language as my answer.
`

export async function getResponse(question, baseAnswer, userAnswer) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt(question, baseAnswer, userAnswer) }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content
}