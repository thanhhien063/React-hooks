import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit:null,
};

function PostFiltersForm(props) {
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSeachTermChange(e) {
        const sValue = e.target.value;
        setSearchTerm(sValue);

        if(!onSubmit) return;
        //SET -- 100 --- CLEAR, SET -- 300 ==> SUBMIT
        //SET -- 300 ==> SUBMIT
        
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        };
        typingTimeoutRef.current = setTimeout(()=>{
            const formValues = {
                searchTerm: sValue,
            };
            onSubmit(formValues);
        },300);
    }
    return (
        <form>
            <input type="text" value={searchTerm} onChange={handleSeachTermChange} />
        </form>
    )
}
export default PostFiltersForm

