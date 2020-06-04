import React from "react";
import './ToDoList.css';
import moment from 'moment'
import Input from "../Input/Input";
import Item from "../Item/Item"


class TodoList extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			item : '',
			list : [
				{
					id : 1,
					value : 'Task 1',
					date : "7:30:35 PM",
					checked : false
				},
				{
					id : 2,
					value : 'Task 2',
					date : "3:30:45 PM",
					checked : false
				},
				{
					id : 3,
					value : 'Task 3',
					date : "5:30:29 PM",
					checked : false
				}
			]
		}
	}

	addItem(e){
		e.preventDefault();
		if(this.state.item !== ""){
			const newItem = {
				id : 1+ Math.random(),
				value : this.state.item.slice(),
				date : moment().format('LTS'),
				checked:false
			}
			let list = [...this.state.list];
			list.push(newItem);
			this.setState({list,newItem,item:""})
		}
	}

	updateInput(key,value){
		this.setState({
			[key] : value
		})
	}

	crossItem(id){
		let list = this.state.list;
		const item = list.findIndex((item) => item.id===id)
		let updatedItem = list[item]
		updatedItem.checked = !updatedItem.checked
		const newTodoList = [...list]
		newTodoList[item] = updatedItem
		this.setState({list : newTodoList})
	}

	deleteItem = (id) => {
		let list = this.state.list
		let i = list.findIndex(item => item.id === id)
		list.splice(i,1)
		this.setState({list})
	}

	render(){
		console.log(this.state.list)
		return(
			<div className="ToDoContainer">
				<div className="ToDoList">
					<div className="TodoHeader">
						<h2>To Do</h2>
						<span className="DateHeading">{moment().format("MMM Do YYYY")}</span>
						<Input onSubmit={e => this.addItem(e)} 
							   value={this.state.item}
							   onChange={e => this.updateInput('item',e.target.value)}
							   />
					</div>
					<ul className="ListCont">
						{this.state.list.map(item => (
							<Item checked={item.checked}
									key={item.id}
									id={item.id}
									crossItem={() => this.crossItem(item.id)} 
									value={item.value}
									date={item.date}
									del = {() => this.deleteItem(item.id)}
							/>
						))}
					</ul>
				</div>
			</div>
		)
	}
}
export default TodoList;
