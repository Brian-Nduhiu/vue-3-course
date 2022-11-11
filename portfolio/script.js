

const blogs = [
    {
        id: 1,
        title: "Why I Learnt Vue",
        body: `I'm baby chambray street art thundercats occupy four loko
        church-key disrupt. Shaman neutra bushwick chicharrones, tousled
        air plant lomo williamsburg. Listicle aesthetic whatever prism,
        ennui glossier asymmetrical scenester austin intelligentsia
        cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
        hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
        tumeric.`
    },
    {
        id: 2,
        title: "Using the Vue CDN",
        body: `I'm baby chambray street art thundercats occupy four loko
        church-key disrupt. Shaman neutra bushwick chicharrones, tousled
        air plant lomo williamsburg. Listicle aesthetic whatever prism,
        ennui glossier asymmetrical scenester austin intelligentsia
        cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
        hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
        tumeric.`
    },
    {
        id: 3,
        title: "How I Mastered Vue",
        body: `I'm baby chambray street art thundercats occupy four loko
        church-key disrupt. Shaman neutra bushwick chicharrones, tousled
        air plant lomo williamsburg. Listicle aesthetic whatever prism,
        ennui glossier asymmetrical scenester austin intelligentsia
        cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
        hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
        tumeric.`
    }
];

Vue.createApp({
    data() {
        return {
            title: "Jamal"
        };
    }
}).mount('title');


Vue.createApp({
    data() {
        return {
            name: "Jamal",
            links: [
                {
                    id: 1,
                    name: 'home',
                    url: '/'
                },
                {
                    id: 2,
                    name: 'portfolio',
                    url: '/portfolio'
                },
                {
                    id: 3,
                    name: 'contact',
                    url: '/contact'
                }
            ],
            blogs,
            darkModeSet: true,
            darkModeStyles: {
                background: '#38383a',
                color: 'whitesmoke'
            },
            base: {
                fontFamily: 'monospace'
            }
        };
    }
}).mount('body');
