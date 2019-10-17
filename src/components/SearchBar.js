import React from "react";

import { Paper, TextField } from "@material-ui/core"

class SearchBar extends React.Component {
    state = {
        searchTerm: ""
    };

    render(){
        return(
            <Paper elevation={6} style= {{padding: "25px"}}>
                <form>
                    <TextField fullWidth label="Search...">
                    </TextField>
                </form>
            </Paper>
        )
    };
}

export default SearchBar;