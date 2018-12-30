import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    async onSearchSubmit(term){
        const response = await axios.get('https://api.unsplash.com/search/photo',  {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID 0841a7e522e182f6b7d95dfd868dff8a5cac81f204ff63ac5c73af4fa297ad95'
            }
        });
        console.log(response.data.results);
    }
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    };
}
export default App;