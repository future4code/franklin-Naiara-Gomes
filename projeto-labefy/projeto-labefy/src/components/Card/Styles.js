import styledComponents from "styled-components";

export const Container = styledComponents.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #0b2c30;
min-height: 40vh;
max-height: 100%;
width: 90%;
-webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000;
margin: 20px 0;


img {
    width: 100px;
    height: 100px;
    padding: 20px 0 ;
}

button{
    display: flex;
  background-color: rgb(205, 64, 64);
  color: white;
  font-size: 13px;
  padding: 3px 7px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  cursor: pointer;
  border: none;
}

`;