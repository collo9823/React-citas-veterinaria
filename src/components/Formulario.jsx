import {useState, useEffect} from 'react'
import Error from './Error'




const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')
  
  const [error, setError] = useState(false);

  useEffect(()=>{
    console.log(paciente)
    if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])


  // useEffect(()=>{
  //   console.log('El componente está listo')
  // }, [])

  const generarId=()=>{
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);

    return fecha + random
  }


  const handleSubmit=(e)=>{
    e.preventDefault();

    //Validacion del formulario
    if([nombre, propietario, email, alta, sintomas].includes('')){
      console.log('Hay al menos un campo vacio');

      setError(true)
      return
    }
    setError(false)

    //Objeto de paciente

    const objetoPaciente = {
      nombre,
      propietario,
      email, 
      alta,
      sintomas,
    
    }

    if(paciente.id){
      //'Editando el registro'
      objetoPaciente.id=paciente.id;

      const pacientesActualizados = pacientes.map(pacienteState=>pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})



    }else{
      //'Nuevo registro'
      objetoPaciente.id= generarId();
      setPacientes([ objetoPaciente, ...pacientes]);

    }
    //Carga los pacientes con spreadOperator

    //Reiniciar Form
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');

  };


  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold '>Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        // onSubmit={(e)=>{e.preventDefault(); console.log('Enviando form')}}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
      >

        {error && <Error>
          <h1>ERROR</h1>
          <p>Todos los campos son obligatorios</p>
          </Error>
          }


        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
            Nombre Mascota
          </label>

          <input
            id='mascota' 
            type="text" 
            placeholder='Nombre de la Mascota' className='border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md'
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            />
        </div>

        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>
            Nombre Propietario
          </label>

          <input
            id='propietario' 
            type="text" 
            placeholder='Nombre del Propietario' className='border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md'
            value={propietario}
            onChange={(e)=>setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
            Email
          </label>

          <input
            id='email' 
            type="email" 
            placeholder='email de propietario' className='border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}  
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
            Alta
          </label>

          <input
            id='alta' 
            type="date" 
            className='border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md'
            value={alta}
            onChange={(e)=>setAlta(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
            Sintomas
          </label>
          <textarea 
            id='sintoma'
            className='border-2 w-full p-2 mt-2 placeholder-gray rounded-md'
            placeholder='Describe los sintomas'
            value={sintomas}
            onChange={(e)=>setSintomas(e.target.value)}
          />

        </div>

        <input 
          type="submit" 
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} 
        />
      </form>
    </div>
  )
}

export default Formulario