Vue.component('app-portraitCon', {
    template:
    `
    <section @click.prevent="closeComp" class="absolute top-0 left-0 px-20 py-40 w-full h-full bg-black/30 z-50" id="portraitCon">
        <div @click.prevent.stop class="rounded-lg bg-white h-full w-full overflow-y-scroll">
            <header class="rounded-t-lg h-10 w-full bg-quinary" id="teamHeader"></header>
            <div class="p-4" style="position:absolute;">
                <button class="hover:animate-pulse block text-4xl font-extrabold" @click.prevent="closeComp">&#x2715</button>
            </div>
            <article class="px-8 w-full">
                <h2 class="text-6xl font-extrabold text-center">Team + Vision for <span class="text-primary">Th</span><span class="text-quarternary">e M</span><span class="text-secondary">ee</span><span class="text-tertiary">pl</span><span class="text-quinary">es</span> and Meeple's Metro</h2>
                <div class="pt-12 px-80">
                    <p class="text-4xl font-bold leading-snug">The team aims to make Meeple’s Metro (MM) a chill and fun social hub for NFT lovers. The goal is for holders to resonate with their meeple and live an exciting dream in MM. Meeples will enjoy fun P2E games/minigames, receive quality alpha, mingle with others and participate in social activities/giveaways. </p>
                    <p class="pt-10 text-4xl font-bold leading-snug">The Magic Meeple Machine (MMM) and the wheel of goodies (which are already available) is just the beginning, we will do our best to achieve all stated goals and reach the fullest potential of MM. </p>
                    <p class="pt-10 text-4xl font-bold leading-snug">Meet the wonderful team behind this project:</p>
                </div>
                <div class="py-12 px-88 grid grid-cols-4 gap-12">
                    <div v-for="member in members" class="w-full h-80 p-4 bg-text">
                        <div class="flex flex-col items-center">
                            <img :src="member.img" class="h-40 w-40">
                            <p class="text-white text-xl font-bold pt-8">{{member.name}}</p>
                            <p class="text-white text-lg font-bold pt-2">{{member.role}}</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
    `,
    data() {
        return {
            members: [
                {
                    name: 'Jakub',
                    role: 'CEO',
                    img: './Resources/members/img.png'
                },
                {
                    name: 'Jakub',
                    role: 'CEO',
                    img: './Resources/members/img.png'
                },
                {
                    name: 'Jakub',
                    role: 'CEO',
                    img: './Resources/members/img.png'
                },
                {
                    name: 'Jakub',
                    role: 'CEO',
                    img: './Resources/members/img.png'
                },
                {
                    name: 'Jakub',
                    role: 'CEO',
                    img: './Resources/members/img.png'
                },
                {
                    name: 'Jakub',
                    role: 'CEO',
                    img: './Resources/members/img.png'
                },
                {
                    name: 'Jakub',
                    role: 'CEO',
                    img: './Resources/members/img.png'
                },
                {
                    name: 'Jakub',
                    role: 'CEO',
                    img: './Resources/members/img.png'
                },
            ]
        }
    },
    methods: {
        closeComp() {
            this.$emit('closeComp');
        }
    }
})
