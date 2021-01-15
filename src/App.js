import React from 'react';

function TableHeader() {
  return(
    <tr className="table-header">
      <th>Tarefa</th>
      <th>Horário</th>
      <th className="table-button"></th>
    </tr>
  )
}


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      newTask: "",
      newTime:"",
      list: []
    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {
    //Creating ID
    const newItem = {
      id: 1 + Math.random(),
      task: this.state.newTask.slice(),
      time: this.state.newTime.slice()
    }

    //item verification
    if( newItem.task === "") return
    if( newItem.time === "") return

    //copy current list
    const list = this.state.list

    //Add in the list
    list.push(newItem)

    //Set the state
    this.setState({
      list
    })
    
  }

  deleteItem(id) {
    console.log(id)
    //copy the current list
    const list = [...this.state.list]
    
    //delete item
    const updatedList = list.filter(item => item.id !== id)

    //update list
    this.setState({
      list: updatedList
    })

  }

  render() {
    
    return(
      <div className="container">
        <h1 id="title">MyList</h1>
        <div className="add-table">

        <div id="add-block-form">
          <div className="input-block">
            <label name="task">Tarefa</label>
            <input 
              type="text" 
              name="task" 
              placeholder="Digite sua tarefa" 
              onChange={e => this.updateInput("newTask", e.target.value)} 
            />
          </div>

          <div className="input-block">
            <label name="time">Horário</label>
            <input 
              type="time" 
              name="time" 
              onChange={e => this.updateInput("newTime", e.target.value)} 
            />
          </div>
        </div>


          <button onClick={() => this.addItem()}>+</button>
        </div>
     
        <table>

          <TableHeader/>

          {
          this.state.list.map(item => {
            return(   
            <tr key={item.id}>
              <td >
                  {item.task}
              </td>
              
              <td >
                  {item.time}
              </td>
             
              <td className="table-button">
                <button onClick={() => this.deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
            )
          })
          }
        </table>

      </div>
    )

  }

}

export default App;
