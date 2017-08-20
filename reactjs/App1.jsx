import React from "react"
import { render } from "react-dom"
import Header from './components/Header';
import Settings from './components/Settings';
import Filter from './components/Filter';
import Image from './components/Image';
import FilterList from './components/FilterList';


class App1 extends React.Component {
    state = {
        image: 'https://static.pexels.com/photos/92873/pexels-photo-92873.jpeg',
        selectedFilter: '',
        settings: {
            contrast: 100,
            hue: 0,
            brightness: 100,
            saturate: 100,
            sepia: 0
        }
    }

    handleChange = event => {
        const setting = event.target.id;
        const value = event.target.value;
        const settings = { ...this.state.settings, [setting]: value };

        this.setState({ selectedFilter: '', settings });
    }

    updateSettings = (selectedFilter, settings) => {
        this.setState({ selectedFilter, settings });
    }

    render() {
        const { image, selectedFilter, settings } = this.state;

        return (
            <div className="app">
                <Header title="Edit foto" />

                <section className="content">
                    <Settings settings={settings} handleChange={this.handleChange} />

                    <main className="main">
                        <Filter settings={settings}>
                            <Image src={image} />
                        </Filter>

                        <FilterList
                            image={image}
                            settings={settings}
                            selectedFilter={selectedFilter}
                            updateSettings={this.updateSettings} />
                    </main>
                </section>

                
            </div>
        );
    }
}
render(<App1/>, document.getElementById('App1'))