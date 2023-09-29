import './AddMeeting.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function AddMeeting(){

    let [loader,setloader] = useState(false);
    let TitleInput = useRef();
    let ImgInput = useRef();
    let DateInput = useRef();
    let DescInput = useRef();
    let navigate = useNavigate();
    function AddMeetingHandler(event){
        event.preventDefault();
        setloader(true);

        let tempData = { Title: TitleInput.current.value, Img:ImgInput.current.value, Date: DateInput.current.value, Desc: DescInput.current.value }

        fetch( 'https://vmeet-f7c0e-default-rtdb.firebaseio.com/vmeet.json' , {
            method: 'post',
            body: JSON.stringify(tempData)
        } ).then(()=>{
            setloader(false);
            navigate("/");
        } ).catch( (error)=>{
            console.log(`error is  ${error}`);
        } )
        TitleInput.current.value="";
        ImgInput.current.value="";
        DateInput.current.value="";
        DescInput.current.value="";
    }

    return(
        <div className="AddMeeting-Container">
            <form>
                <h2 >Add New Meeting</h2>
                <input type='text' placeholder='Meeting title' className='InputField' ref={TitleInput} />
                <input type='text' placeholder='Meeting Image' className='InputField' ref={ImgInput} />
                <input type='datetime-local' placeholder='Meeting Date' className='InputField' ref={DateInput} />
                <input type='text' placeholder='Meeting description' className='InputField' ref={DescInput}/>
                <div className='load'>
                    <button className='btn' onClick={AddMeetingHandler} >Add Meeting</button>
                    <span class={loader==true?"loader" : "d-none"}></span>
                </div>
            </form>
            
            
        </div>
    );
}
export default AddMeeting;