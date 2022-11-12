

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
        body: `I'm baby chambray street art <strong style="color:red">thundercats</strong> occupy four loko
        church-key disrupt. Shaman neutra bushwick chicharrones, tousled
        air plant lomo williamsburg. <i style="color:green">Listicle</i> aesthetic whatever prism,
        ennui glossier asymmetrical scenester austin <br/> intelligentsia
        cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
        hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
        tumeric.`
    },
    {
        id: 3,
        title: "How I Mastered Vue",
        body: `I'm baby chambray street art thundercats occupy four loko
        church-key disrupt. Shaman neutra bushwick chicharrones, tousled
        air plant lomo williamsburg. Listicle <hr/> aesthetic whatever prism,
        ennui glossier asymmetrical scenester austin intelligentsia
        cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
        hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
        tumeric.`
    }
];

const titleApp = Vue.createApp({
    data() {
        return {
            title: "Jamal"
        };
    }
});

titleApp.mount('title');


const app = Vue.createApp({
    created() {
        this.getPosts();
    },
    data() {
        return {

            blogs: [],
            darkModeSet: true,
            darkModeStyles: {
                background: '#38383a',
                color: 'whitesmoke'
            },
            base: {
                fontFamily: 'monospace'
            }
        };
    },
    methods: {
        toggleMode() {
            this.darkModeSet = !this.darkModeSet;
        },
        async getPosts() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            this.blogs = await response.json();
            console.log(this.blogs);
        }

    },

});

app.component('app-header', {
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
        };
    },
    template: `
    <h1>{{name}}</h1>
        <nav>
        <ul>
            <li v-for="link in links"><a :href="link.url" :key="link.id">{{ link.name }}</a></li>				
        </ul>
        </nav >`
});


app.component('blog-post', {
    props: ['blog'],
    template: `
    <article>
		<h3>{{blog.title}}</h3>
		<p>
        {{blog.body}}
		</p>
		<p class="read_more">Read More</p>
	</article>`
});


app.mount('body');
