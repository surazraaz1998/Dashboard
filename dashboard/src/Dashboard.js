import React from 'react'
import styled from 'styled-components'
function Dashboard() {
    return (
        <Container>
            <LeftContainer>
                <p>
                  <h2>Dashboard</h2>
                  Create new Task 
                  <br/>
                  My Task
                </p>
            </LeftContainer>
            <RightContainer>
                <UpperBox>
                    <Contain>
                        <p>
                            Total In progress Task 5
                        </p>
                    </Contain>
                    <Contain>
                        <p>Total Completed task 1</p>
                    </Contain>
                </UpperBox>
                <LowerBox>
                    <p>
                        Most Recent Task (Last 5 created task will be visible here)
                    </p>
                    <div>

                    </div>
                </LowerBox>
            </RightContainer>
        </Container>
    )
}

export default Dashboard

const Container=styled.div`
      display:flex;
    
`

const LeftContainer=styled.div`
      flex:0.2;
      background-color: blue;
      height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      p{
          color:white;
          align-items:center;
          justify-content:center;
          text-transform:uppercase;
          
      }

`

const RightContainer=styled.div`
      flex:0.8;
      justify-content:center;
      align-items:center;
   
`

const UpperBox=styled.div`
     justify-content:center;
     align-items:center;
     display:flex;
     padding:10px;
     margin-left:10px;
     margin-right:10px;
     margin-top:40px;
  
`

const Contain=styled.div`
     background-color:blue;
     display:flex;
     margin-right:30px;
     padding:10px;
     border-radius:20px;
     height:30vh;
     width:30vw;

     p{
         font-wight:bold;
         color:white;
         font-size:50px;
         align-items:center;
         justify-content:center;
         padding:10px;
     }
`

const LowerBox=styled.div`
     margin-top:65px;
     padding:10px;
     justify-content:center;
     color:blue;
     div{
         background-color:blue;
         height:30vh;
         margin-left:50px;
         margin-right:30px;
     }
     p{

         text-align:center;
     }

`