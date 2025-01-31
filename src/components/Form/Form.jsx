import './Form.css';
import { connect } from 'react-redux';
import {
    addService,
    addServiceChanges,
    endServiceEditing,
    changeServiceField
} from '../actions/actionsOperation';


function Form(props) {
    const {
        form,
        onServiceSubmit,
        onChangesSubmit,
        onReset,
        onChange,
    } = props;

    function handleInputChange({ target }) {
        const { name, value } = target;
        onChange(name, value);
    }

    return (
        <form
            className="form"
            onSubmit={(event) => {
                event.preventDefault();
                const { name, price } = form;
                if (form.editingMode.state) {
                    const { index } = form.editingMode;
                    onChangesSubmit(index, name, price);
                    onReset();
                } else {
                    onServiceSubmit(name, price);
                    onReset();
                }
            }}

            onReset={(event) => {
                event.preventDefault();
                onReset();
            }}
        >
            <div className="form-control">
                <label htmlFor="name">Услуга</label>
                <input
                    className="form-control__name"
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="Например: Замена экрана"
                    autoComplete="off"
                />
            </div>
            <div className="form-control">
                <label htmlFor="price">Стоимость</label>
                <input
                    className="form-control__price"
                    type="number"
                    id="price"
                    name="price"
                    min="1"
                    max="99999"
                    required
                    value={form.price}
                    onChange={handleInputChange}
                    onFocus={({ target }) => target.select()}
                />
            </div>
            <input
                className="form-control__button-save"
                type="submit"
                value="Сохранить"
            />
            {
                form.editingMode.state
                && <input
                    className="form-control__button-reset"
                    type="reset"
                    value="Отменить"
                />
            }
        </form>
    );
}


const mapStateToProps = (state) => {
    return {
        form: state.form,
    }
};

const mapDispatchToProps = ({
    onServiceSubmit: addService,
    onChangesSubmit: addServiceChanges,
    onReset: endServiceEditing,
    onChange: changeServiceField,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);