export default function useValidation (errors,fields)  {
    return errors?.[fields]?.length && errors[fields].map((error,indx)=>(
          <div key={indx} className="bg-danger p-2 text-white rounded my-1">
              {error}
          </div>
    ))
     
    
  }