import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import Slideshow from '../components/Slideshow';
import Header from '../components/Header';
import SportsCard from '../components/SportsCard';
import { Navbar, Table, Card } from 'react-bootstrap';
import NocOverview from '../components/NocOverview';

describe('<App /> - Testing App Component', () => {
    it('Test to find the header component',()=>{
        const app = shallow(<App />);
        expect(app.find(<Header />));
    });
    it('Test to find the header title',()=>{
        const app = shallow(<App />);
        expect(app.find("National Olympic Committee"));
    });
    it('To find Slideshow component in the app',()=>{
        const app = shallow(<App />);
        expect(app.find( <Slideshow />));
    });
    it('To find sports card component in the app',()=>{
        const app = shallow(<App />);
        expect(app.find( <SportsCard />));
    });
});

describe('<Header />- Testing Header component',()=>{
    it('Find the Header title',()=>{
        const header = shallow(<Header />);
        expect(header.find(<Navbar/>));
    })
});

describe('<NocOverview />- Testing NocOverview component',()=>{
    it('Find the NocOverview title tag',()=>{
        const nocOverview = shallow(<NocOverview />);
        expect(nocOverview.contains(<h2>2014 Winter Olympics medal</h2>)).toEqual(true);
    });

    it('Find the NocOverview table element',()=>{
        const nocOverview = shallow(<NocOverview />);
        expect(nocOverview.matchesElement(<td>NOC</td>));
    });
});

describe('<Slideshow />- Testing Slideshow component',()=>{
    
    it('Find the Slideshow Carousel element',()=>{
        const slideshow = shallow(<Slideshow />);
        expect(slideshow.containsMatchingElement(<img/>)).toEqual(true);
    });
});

describe('<SportsCard />- Testing SportsCard component',()=>{
    it('Find the SportsCard to contain card tag',()=>{
        const sports = shallow(<SportsCard />);
        expect(sports.matchesElement(<Table/>));
    });
})

