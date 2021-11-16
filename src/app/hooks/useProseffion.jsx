import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import professionService from "../services/professionService";

const ProfessionContext = React.createContext();

const ProfessionPropvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [professions, setProfessions] = useState([]);

    useEffect(() => {
        getProfessions();
    }, []);

    async function getProfessions() {
        try {
            const { content } = await professionService.get();
            setProfessions(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
        // setLoading(false);
    }

    return (
        <ProfessionContext.Provider value={{ isLoading, professions }}>
            {children}
        </ProfessionContext.Provider>
    );
};

ProfessionPropvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default ProfessionPropvider;
