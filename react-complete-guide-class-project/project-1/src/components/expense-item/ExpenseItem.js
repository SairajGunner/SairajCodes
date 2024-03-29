import ExpenseItemDate from '../expense-item-date/ExpenseItemDate';
import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpenseItemDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    )
}

export default ExpenseItem;