import './App.css';
import { AiFillEdit } from 'react-icons/ai';
import { MdAddCircle } from 'react-icons/md';
import { useEffect, useState } from 'react';
import Data from './Data.json'
import axios from 'axios';

function App() {

  const [apiData, setApiData] = useState([])
  const getList = () => {
    axios.get('http://127.0.0.1:8888/cepfix/api/getlist')
      .then((response) => setApiData(response.data.data))
      .catch((error) => console.log(error))
  }
  useEffect(() => getList(), []) // prevents infinity reloading

  const [addOut, setAddOut] = useState(false)
  const [editOut, setEditOut] = useState(false)

  function add_Out() {
    setAddOut(!addOut)
    setEditOut(false)
  }
  function edit_Out() {
    setEditOut(!editOut)
    setAddOut(false)
  }

  const addData = e => {
    let OpResult = document.getElementById("OpResult").value
    let ErrMessage = document.getElementById("ErrMessage").value
    let filePath = document.getElementById("filePath").value
    let date = document.getElementById("date").value

    let formData = new FormData()

    formData.append("type", "add")
    formData.append("id", "NULL")
    formData.append("OpResult", OpResult)
    formData.append("ErrMessage", ErrMessage)
    formData.append("filePath", filePath)
    formData.append("date", date)

    const url = "http://localhost:8888/cepfix_assignment/server/"
    axios.post(url, formData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  const [myId, setMyId] = useState("")
  const [opResult, setOpResult] = useState("")
  const [ErrMessage, setErrMessage] = useState("")
  const [filePath, setFilePath] = useState("")
  const [myDate, setMyDate] = useState("")

  const saveData = e => {
    let OpResult = document.getElementById("OpResultE").value
    let ErrMessage = document.getElementById("ErrMessageE").value
    let filePath = document.getElementById("filePathE").value
    let date = document.getElementById("dateE").value
    let id = document.getElementById("idE").value

    let formData = new FormData()

    formData.append("type", "edit")
    formData.append("id", id)
    formData.append("OpResult", OpResult)
    formData.append("ErrMessage", ErrMessage)
    formData.append("filePath", filePath)
    formData.append("date", date)

    const url = "http://localhost:8888/cepfix_assignment/server/"
    axios.post(url, formData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

  }
  const editData = (row) => {
    setMyId(row.id)
    setOpResult(row.operationResult)
    setErrMessage(row.errorMessage)
    setFilePath(row.filePath)
    setMyDate(row.date)
    edit_Out()
  }


  return (
    <div className="App">
      <div className="modal">
        <button onClick={add_Out}><MdAddCircle /><span>Add</span></button>
        <table className="myTable">
          <thead>
            <tr>
              <th>Date</th>
              <th>Operation Result</th>
              <th>Error Message</th>
              <th>File Path</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {Data.slice(0).reverse().map((row) => {
              const { id, operationResult, errorMessage, filePath, date } = row;
              return (
                <tr key={id}>
                  <td>{date}</td>
                  <td>{operationResult}</td>
                  <td>{errorMessage}</td>
                  <td>{filePath}</td>
                  <td><AiFillEdit className="editIcon" onClick={() => editData(row)} /></td>
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>
      <div className="popupModal" style={addOut ? { display: `flex` } : { display: `none` }}>
        <form>
          <span className="popupHeader">Add</span>
          <label>Operation Result</label>
          <input type="text" placeholder="Operation Result" id="OpResult" />
          <label>Error Message</label>
          <input type="text" placeholder="Error Message" id="ErrMessage" />
          <label>File Path</label>
          <input type="file" placeholder="File Path" id="filePath" />
          <label>Date</label>
          <input type="date" placeholder="Date" id="date" />
          <input onClick={addData} className="addBtn" type="submit" value="Add" />
          <input onClick={add_Out} className="cancelBtn" type="submit" value="Cancel" />
        </form>
      </div>

      <div className="popupModal" style={editOut ? { display: `flex` } : { display: `none` }}>
        <form>
          <span className="popupHeader">Edit</span>
          <label>Operation Result</label>
          <input
            type="text"
            placeholder="Operation Result"
            id="OpResultE"
            value={opResult}
            onChange={e => setOpResult(e.target.value)}
          />
          <label>Error Message</label>
          <input
            type="text"
            placeholder="Error Message"
            id="ErrMessageE"
            value={ErrMessage}
            onChange={e => setErrMessage(e.target.value)}
          />
          <label>File Path</label>
          <input
            type="text"
            placeholder="File Path"
            id="filePathE"
            value={filePath}
            onChange={e => setFilePath(e.target.value)}

          />
          <label>Date</label>
          <input
            type="date"
            placeholder="Date"
            id="dateE"
            value={myDate}
            onChange={e => setMyDate(e.target.value)}
          />
          <input
            type="hidden"
            placeholder="Operation Result"
            id="idE"
            value={myId}
            onChange={e => setMyId(e.target.value)}
          />
          <input onClick={saveData} className="addBtn" type="submit" value="Save" />
          <input onClick={edit_Out} className="cancelBtn" type="submit" value="Cancel" />
        </form>
      </div>
    </div>
  );
}
export default App;
