Vue.component('app-piggybankCon', {
    template:
    `
    <section @click.prevent="closeComp" class="absolute top-0 left-0 px-20 py-40 w-full h-full bg-black/30 z-50" id="portraitCon">
        <div @click.prevent.stop class="relative rounded-lg bg-white h-full w-full overflow-y-scroll">
            <header class="rounded-t-lg h-10 w-full bg-quarternary" id="piggyHeader"></header>
            <article class="pt-12 px-40 w-full z-50">
                <div class="flex justify-between items-center">
                    <div class="w-4/5">
                        <h2 class="text-6xl font-extrabold text-quarternary">How are funds managed in Meeple’s Metro?</h2>
                        <p class="mt-8 text-3xl font-extrabold leading-snug">Master Meeple knows how hard is it to earn money. They strongly believe in transparency with the meeple fam to build a genuine and long lasting Meeple’s Metro that will flourish! Fund allocation is as shown:</p>
                    </div>
                    <div class="w-1/5 ml-10">
                        <img src="./Resources/pigtv.png" alt="pigTv">
                    </div>
                </div>
                <div class="flex justify-between items-baseline mt-10 w-full px-40">
                    <div class="w-2/3 flex justify-between">
                        <div class="flex flex-col items-center justify-center">
                            <h3 class="text-4xl font-extrabold leading-snug">FROM MINT</h3>
                            <div>
                                <img src="./Resources/pigmint.png" alt="Mint">
                            </div>
                        </div>
                        <div class="ml-20 flex flex-col items-center justify-center">
                            <h3 class="text-4xl font-extrabold leading-snug">FROM ROYALTIES</h3>
                            <div>
                                <img src="./Resources/pigroyal.png" alt="Royal">
                            </div>
                        </div>
                    </div>
                    <div class="ml-20 w-1/3 bg-text rounded-lg p-10 self-stretch flex flex-col justify-center">
                        <p class="text-lg font-extrabold leading-snug text-secondary">team - for the team’s hard work!</p>
                        <p class="pt-4 text-lg font-extrabold leading-snug text-primary">holder’s vault - any purchase made from the holder’s vault will be strictly to give back to the holders; NFT prizes, giveaways, etc.</p>
                        <p class="pt-4 text-lg font-extrabold leading-snug text-custom_lblue">metro vault - will be spent strictly for the development and upgrade of Meeple’s Metro!</p>
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
