import {useCompoContext} from '../components/context'

const {updateUsername} = useCompoContext

function ComponentfileComponent1(){
    return(
        <div>
            <input type="text" onChange={updateUsername} className="form-fiel" placeholder='Username'/>
            <button>here</button>
        </div>
    )
}
export default ComponentfileComponent1