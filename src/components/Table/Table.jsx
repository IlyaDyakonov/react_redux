import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { editService, removeService } from '../actions/actionsOperation.js';
import TableRow from './TableRow/TableRow.jsx';
import "./Table.css";


function Table(props) {
    const { services, onRemove, onEdit } = props;
    const search = useSelector((state) => state.search);
    const tableLength = 3;

    function handleDeleteClick(id) {
        return onRemove(id);
    }

    function handleEditClick(id) {
        const index = services.findIndex((service) => service.id === id);
        const { name, price } = services[index];
        return onEdit(name, price, { state: true, index });
    }


    let filteredList = null;

    if (search.search) {
        filteredList = services.map(({ id, name, price }) => {
            if (!name.startsWith(search.search)) {
                return null;
            }

            return (
                <TableRow
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    onDeleteClick={() => handleDeleteClick(id)}
                    onEditClick={() => handleEditClick(id)}
                />
            );
        });

        if (!filteredList.filter(Boolean).length) {
            filteredList = (
                <tr>
                    <td colSpan={tableLength}>
                        По вашему запросу ничего не найдено.
                    </td>
                </tr>
            );
        }
    }

    const list = services.map(({ id, name, price }) => {
        return (
            <TableRow
                key={id}
                id={id}
                name={name}
                price={price}
                onDeleteClick={() => handleDeleteClick(id)}
                onEditClick={() => handleEditClick(id)}
            />
        );
    })

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Услуга</th>
                    <th>Стоимость (руб.)</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>{filteredList || list}</tbody>
        </table>
    );
}

const mapStateToProps = (state) => {
    const services = state.table;
    return {
        services,
    };
};

const mapDispatchToProps = {
    onRemove: removeService,
    onEdit: editService,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);