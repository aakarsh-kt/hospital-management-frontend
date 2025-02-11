import React, { useEffect } from "react"; 
import "./index.css"
import { Box, Button, Heading } from "grommet";
import Contact from "./Contact";
export default function Contribute() {
    const Header = () => (
        <Box
          tag='header'
          background='brand'
          pad='small'
          elevation='small'
          justify='between'
          direction='row'
          align='center'
          flex={false}
          style={{ borderBottom: "1px solid grey" }}
        >
          <a style={{ color: 'inherit', textDecoration: 'inherit' }} href="/">
            <Heading level='3' margin='none'>HMS</Heading>
          </a>
          
        </Box>
      );
      const [money,setMoney]=React.useState();
     async function handleSubmit(){
       await fetch("http://localhost:3001/Contribute?money="+money +"&email="+email)
        console.log(money);
      }
      const [email,setEmail]=React.useState();
      useEffect(()=>{
        fetch("http://localhost:3001/userInSession")
        .then(res => res.json())
        .then(res => {
         setEmail(res.email);
          console.log("Email In Use Is :" + res.email);
        })
      },[])
    return (
        <div>
            <Header />
      
        <div 
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            
            <h1  style={{color:"#022220"}}>Contribute</h1>
            <h2>How much would you Like to Contribute in INR</h2>
            <div 
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#f2f2f2",
                width: "500px",
                height: "50px",
                gap: "10px",
            }}
            >

            <input 
            type="number"
            onChange={(e)=>setMoney(e.target.value)}
            >
            </input>
            <Button label="Contribute" primary
            onClick={handleSubmit}
            />
                </div>
        </div>
        </div>
    );
}

//style={{backgroundColor:"#f2f2f2",margin:"0px"}}