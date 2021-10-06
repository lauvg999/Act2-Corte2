import React from 'react';
import '../App.css';

const LogoIco = (props) => {
    return (
        <div> 
            <div style={{ ..._stylesLayout.btn }}>
                <svg xmlns={props.svgUrl} viewBox="0 0 16 16" style={{ ..._stylesLayout.logo }}>
                    <path fill='#E6001A' d={props.svgPath}/>
                </svg>
            </div>
        </div>
    );
};

const SearchIco = (props) => {
    return (
        <div> 
            <div style={{ ..._stylesLayout.btn }}>
                <svg xmlns={props.svgUrl} viewBox="0 0 496 512" style={{ ..._stylesLayout.Search }}>
                    <path fill='gray' d={props.svgPath}/>
                </svg>
            </div>
        </div>
    );
};

const BtnIco = (props) => {
    return (
        <div> 
            <div style={{ ..._stylesLayout.btn }}>
                <svg className='btnsHeader' xmlns={props.svgUrl} viewBox="0 0 496 512" style={{ ..._stylesLayout.svg }}>
                    <path fill='gray' d={props.svgPath} />
                </svg>
            </div>
        </div>
    );
};

const _stylesLayout = {

    btn: {
        border: 'none',
        height: '100%',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',        
    },

    logo:{
        cursor:'pointer',
        position: 'absolute',
        width: '42px',
        height: '42px',
    },

    Search: {
        position: 'absolute',
        width: '15px',
        height: '15px',
        padding: '15px',
    },

    svg:{
        cursor:'pointer',
        position: 'absolute',
        width: '22px',
        height:'22px',
    },  
};

export {LogoIco, SearchIco, BtnIco};