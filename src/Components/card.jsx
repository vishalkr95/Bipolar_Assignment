import React,{useState,useEffect} from 'react';

import {styled } from '@mui/material';
import {makeStyles} from '@mui/styles';
import './style.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import LoginDialog  from "./model";
//npm install @mui/material @emotion/react @emotion/styled

import data from './data'
export default function Cards(){
    const [like,setLike] = useState(false);
    const [open, setOpen] = useState(false);
    let [c,setC]=useState(0);
    const [ndata,setNdata]=useState(data);
    const handleLike = () => {
        if(like==true){
            setLike(false);
        }else{
            setLike(true);
        }
    }
    const handleDtaitls=()=>{
        setOpen(true);
    }
    
    const Delete=(id)=>{
        let newarr = [];
        newarr = ndata.filter((userdata)=>userdata.id!=id)
        setNdata(newarr);
        console.log(newarr.length);
        setC(c+1);
      
    }
    useEffect(()=>{
       
    },[c])

     return (
        

        <>
        <div className="main">
             
            {   
                
                ndata.map((user)=>{
                    
                    return <div className="mcard">
                        <img src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} />
                        <div className="details">
                            <h3 className="p">{user.name} </h3>
                            <p className="p"><EmailIcon/> {user.email}</p>
                            <p className="p"><PhoneEnabledIcon/>  {user.phone}</p>
                            <p className="p"><LanguageIcon/>{user.website}</p>
                        </div>
                        <ul className="list">
                            <li> {
               
                                //    like==true?<FavoriteIcon className={`like`} onClick={handleLike}/> :<FavoriteIcon className={`unlike`} onClick={handleLike}/>
                            
                                 }
                                <img src={"C:/Users/vishal kumar/webPep/new/test/src/Components/img/red-heart-icon.png"} />
                                
                            </li>
                            <li>
                                <BorderColorIcon onClick={handleDtaitls}/>
                                <LoginDialog open={open} setOpen={setOpen} />
                            </li>
                            <li>
                                 <DeleteIcon onClick={()=>Delete(user.id)}/>
                            </li>
                        </ul>
                        
                    </div>
                    
                })
                
    
            }
        </div>
       </>

    );
}