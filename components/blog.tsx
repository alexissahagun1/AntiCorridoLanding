import Entrevista from '../public/entrevista.json';

export default function Blog() {
  return (
    <>
      <div className="flex justify-center mb-10 flex-col mx-96">
        <h4 className="text-3xl font-bold text-center my-2">Entrevista</h4>
        La entrevistada, Leticia C., ha sido profesora y coordinadora de la clase de “Lengua Materna” a nivel secundaria por más de 24 años, principalmente participando en la educación pública federal. Estudió la licenciatura en Educación, lengua y literatura española en la Escuela Normal Superior de Jalisco y después la Maestría en el Instituto Superior de Investigación y Docencia para el Magisterio; por esto mismo, ha basado su educación en Jalisco, México e impartida la misma principalmente en la zona norponiente del municipio de Zapopan.
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
