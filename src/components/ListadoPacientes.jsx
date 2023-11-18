import React, { useEffect } from 'react'
import { Paciente } from './Paciente'



const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {



  // console.log(pacientes.length === 0)
  // useEffect(()=>{
  //   if(pacientes.length > 0){
  //     console.log('Nuevo paciente')
  //   }
  // }, [pacientes])


  return (
    <div className='md:w-1/2 lg:w-3/5'>
      {pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              Administra tus {''}
              <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
            </p>


          <div className='mt-0 pt-0 md:h-screen overflow-y-scroll'>
            {pacientes.map((paciente)=>(
              <Paciente 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </div>
        </>
        
      )  : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              Comienza agregando pacientes {''}
              <span className='text-indigo-600 font-bold'>y aparecerán en este lugar</span>
            </p>
        </>
      )
      
      
      }
    
    </div>
  )
}

export default ListadoPacientes