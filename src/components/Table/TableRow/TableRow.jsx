import './TableRow.css';
import PropTypes from 'prop-types';


export default function TableRow(props) {
    const {
        id,
        name,
        price,
        onDeleteClick: handleDeleteClick,
        onEditClick: handleEditClick,
    } = props;

    return (
        <tr className="tableRow" id={id}>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <a
                    className="tableRow-control__edit"
                    href="#0"
                    onClick={handleEditClick}
                >
                    &#9998;
                </a>
                <a
                    className="tableRow-control__delete"
                    href="#0"
                    onClick={handleDeleteClick}
                >
                    &#10008;
                </a>
            </td>
        </tr>
    );
}


TableRow.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
};