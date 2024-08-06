import './Search.css';
import '../Form/Form.css';
import { connect } from 'react-redux';
import { changeService } from '../actions/actionsOperation';


function Search(props) {
    const { search, onSearchService } = props;
    console.log('Search: ', search);
    function handleSearchChange({ target }) {
        const { name, value } = target;
        onSearchService(name, value);
    }

    return (
        <form className="form">
            <div className="form-control">
                <label htmlFor="search">Поиск</label>
                <input
                    className="form-control__name"
                    type="text"
                    id="search"
                    name="search"
                    required
                    value={search.search}
                    onChange={handleSearchChange}
                    placeholder="Поиск определённой услуги..."
                    autoComplete="off"
                />
            </div>
        </form>
    )
}


const mapStateToProps = (state) => {
    return {
        search: state.form,
    }
};

const mapDispatchToProps = ({
    onSearchService: changeService,
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
