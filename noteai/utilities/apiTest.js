import Groq from "groq-sdk";



const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY, dangerouslyAllowBrowser: true  });




/* 
The top function accepts a prompt to ask the groq AI. The bottom function passes that prompt into groq and returns a text result.
*/
export async function askGroqPrompt(promptString){

  const chatCompletion = await passGroqPrompt(promptString);
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");

}

export async function passGroqPrompt(promptString){

  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: promptString,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });

}





//These two lower functions were just used to test a few things, not too useful for anything right now

export async function simpleGroqQuestion() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}


export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
}