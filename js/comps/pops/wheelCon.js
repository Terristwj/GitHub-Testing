Vue.component('app-wheelCon', {
    template:
    `
    <section @click.prevent="closeComp" class="absolute top-0 left-0 px-20 py-40 w-full h-full bg-black/30 z-50" id="portraitCon">
        <div @click.prevent.stop class="relative rounded-lg bg-white h-full w-full overflow-y-scroll">
            <header class="rounded-t-lg h-10 w-full bg-primary" id="faqHeader"></header>
            <div class="p-4" style="position:absolute;">
                <button class="hover:animate-pulse block text-4xl font-extrabold" @click.prevent="closeComp">&#x2715</button>
            </div>
            <article class="pt-12 px-40 w-full z-50">
                <h1 class="text-6xl text-center text-primary font-extrabold leading-tight">Wheel of Goodies</h1>
                <h2 class="mt-4 text-5xl font-extrabold text-center">The first of many MINIGAMES to be released, the Wheel of Goodies! The wheel can be spun daily, with many attractive prizes to be won by the meeple fam :D</h2>

                <div class="my-20">
                    <div class="grid grid-cols-5 gap-10">
                        <div class="rounded-lg bg-primary p-8">
                            <h6 class="text-2xl font-bold text-center">Meeple Fact</h6>
                            <p class="mt-2 text-lg font-bold text-white">Uncover an exciting meeple fact, crucial to The Meeples story and lore! Hint: Store them somewhere safe, they might come and handy!</p>
                        </div>
                        <div class="rounded-lg bg-quarternary p-8">
                            <h6 class="text-2xl font-bold text-center">NFT</h6>
                            <p class="mt-2 text-lg font-bold text-white">Jackpot! A random NFT from the holder’s vault will be airdropped to you, mad stonks!</p>
                        </div>
                        <div class="rounded-lg bg-tertiary p-8">
                            <h6 class="text-2xl font-bold text-center">WL spots</h6>
                            <p class="mt-2 text-lg font-bold text-white">Obtain a whitelist spot for projects that we believe in, we only give the best to our meeple fam, now go secure that mint!</p>
                        </div>
                        <div class="rounded-lg bg-secondary p-8">
                            <h6 class="text-2xl font-bold text-center">Meeple<br>wallpaper + banner</h6>
                            <p class="mt-2 text-lg font-bold text-white">1 of 1 hand drawn banner/wallpaper customized by you! Choose your own meeple, NFT, nametag and background!</p>
                        </div>
                        <div class="rounded-lg bg-quinary p-8">
                            <h6 class="text-2xl font-bold text-center">Master<br>Meeple</h6>
                            <p class="mt-2 text-lg font-bold text-white">Win a brand new Master Meeple, 1/1 hand drawn meeples that are the most powerful, beautiful and unique! </p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        closeComp() {
            this.$emit('closeComp');
        }
    }
})
