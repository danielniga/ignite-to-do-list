import {Container } from "./styled";
import BodyItems from "../BodyItems"
import {useState, useEffect} from "react"

interface listProps {
    id:number;
    text: string;
    isChecked: boolean;
}
export default function Body(){
    const [cont, setCont] = useState(0)
    const [textInsert, setTextInsert] = useState("")
    const [list, setList] = useState<listProps[]>([])

    useEffect(()=>{
        let newCont = 0
        list.forEach(item => {
            if(item.isChecked == true){newCont++}
        }); 
        setCont(list.length - newCont)       
    },[list])

    const handleAddItem = () => {
        if(textInsert === ""){return}
        setList([...list,{
                    id:Date.now(), 
                    text:textInsert,
                    isChecked:false
                }
        ])
        setTextInsert("")
    }  
    const handleChangeIsChecked = (id:number) => {   
         list.forEach(item => {
            if(item.id === id){
                item.isChecked = !item.isChecked
                setList([...list])
            }
        });
    }
    const handleRemoveItem = (id:number) => {
        const newList = list.filter(item=>item.id != id)
        setList(state=>{return newList})
    }

    return(
        <Container>
            <div className="divTxt">
                <input 
                className="txtAdd" 
                placeholder="Adicione uma nova tarefa"
                value={textInsert}
                onChange={e=>setTextInsert(e.target.value)}
                />
                <button className="btnAdd" onClick={handleAddItem}>Criar<img src="assets/plus.png"/></button>
            </div>
            <div className="divHeaderList">  
                <div  className="divHeaderListChildEsq">
                    <label>Tarefas criadas</label> 
                    <div>{list.length}</div> 
                 </div>

                <div  className="divHeaderListChildDir">
                    <label>Concluídas</label> 
                      <div>{`${list.length - cont} de ${list.length}`}</div> 
                 </div>
            </div>
            {
                !list.length && 
                <div className="notValue">
                    <img src="assets/Clipboard.png"/>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            }
            {
                list.map(item=>{                                      
                    return(
                        <>
                            <BodyItems key={item.id}
                             clickRemoveItem ={handleRemoveItem} 
                             clickChangeChehck={handleChangeIsChecked} 
                             text={item.text} 
                             isChecked={item.isChecked} 
                             id={item.id}  />
                        </>
                    )
                })
            }
        </Container>
    )
}