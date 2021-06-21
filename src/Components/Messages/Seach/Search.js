import React, {useEffect, useState} from "react";
import styles from './Search.module.css';
import Svg from "../../Svg/Svg";

const Search = (props) => {
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        props.setDialogsType('search');
        props.setText(inputText);
    }, [inputText]);

    return (
        <div className={styles.search}>
            <div className={styles.searchSvg}><Svg name='search'/></div>
            <input value={inputText} placeholder='Search' type="text"
                   onClick={() => props.setDialogsType('suggest')}
                   onInput={(e) => {
                       setInputText(e.target.value)
                   }}/>
            <button className={styles.phoneBtn}/>
            <button className={styles.createGroupBtn}/>
        </div>
    )
}

export default Search;