import Entrevista from '../public/entrevista.json';

export default function Blog() {
  return (
    <>
      <div className="flex justify-center mb-10">
        <h4 className="text-3xl font-bold">Entrevista</h4>
      </div>

      <div className="flex mx-96 text-xl flex-col space-y-4 bg-gray-100 rounded-3xl border p-10 m-10">
        {Entrevista.sections.map((section: any) => (
          <div className='space-y-4' key={section.id}>
            <h6 className="font-bold text-2xl">{section.heading}</h6>

            <ul>
              {section.questions.map((question: any, index: number) => (
                <li  className="text-xl" key={index}>
                  <p className="font-bold ">{question.question}</p>
                    <p className='whitespace-pre-line my-4'>{question.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}

      
      </div>
      


    </>
  );
}
