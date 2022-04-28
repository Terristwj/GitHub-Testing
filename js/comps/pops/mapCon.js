Vue.component('app-mapCon', {
    template:
    `
    <section @click.prevent="closeComp" class="absolute top-0 left-0 px-20 py-40 w-full h-full bg-black/30 z-50" id="mapCon">
        <div @click.prevent.stop class="relative rounded-lg bg-white h-full w-3/4 mx-auto overflow-y-scroll" id="mapCon">
            <div class="p-4">
                <button class="block text-4xl font-extrabold" @click.prevent="closeComp">&#x2715</button>
            </div>
            <header class="rounded-b-2xl h-20 w-3/4 mx-auto bg-text flex items-center justify-center text-center overflow-y-scroll">
                <h2 class="text-5xl font-extrabold text-white">
                    <span class="text-primary">Th</span><span class="text-quarternary">e M</span><span class="text-secondary">ee</span><span class="text-tertiary">pl</span><span class="text-quinary">es</span>
                    Roadmap (Phase 1)
                </h2>
            </header>
            <div class="flex justify-center absolute w-full">
                <img src="./Resources/icons/roadarrow.png" alt="arrows">
            </div>
            <div class="h-full py-10 px-20 w-full flex justify-between">
                <div class="flex flex-col w-2/5">
                    <div class="pt-6 w-full">
                        <div class="h-36">
                            <header class="bg-primary text-white rounded-2xl py-3 px-6 w-fit">
                                <h3 class="text-3xl font-extrabold">1. Beginning of The Meeples</h3>
                            </header>
                            <p class="pt-1 text-xl font-extrabold leading-snug w-4/5">Creation and launch of <span class="text-primary">Th</span><span class="text-quarternary">e M</span><span class="text-secondary">ee</span><span class="text-tertiary">pl</span><span class="text-quinary">es</span>’ Twitter, Discord, Website and Whitepaper!</p>
                        </div>
                    </div>
                    <div class="pt-8 w-full">
                        <div class="h-48">
                            <header class="bg-secondary text-white rounded-2xl py-3 px-6 w-fit">
                                <h3 class="text-3xl font-extrabold">3. Wheel of Goodies</h3>
                            </header>
                            <p class="pt-1 text-xl font-extrabold leading-snug w-4/5">The very first minigame. Meeple Holders will get a chance to spin a wheel daily, filled with attractive prizes to be won! (NFTs, ...)</p>
                        </div>
                    </div>
                    <div class="pt-12 w-full">
                        <div class="h-52">
                            <header class="bg-quinary text-white rounded-2xl py-3 px-6 w-fit">
                                <h3 class="text-3xl font-extrabold">5. Meeple's Metro launch!</h3>
                            </header>
                            <p class="pt-1 text-xl font-extrabold leading-snug w-4/5">Meeple’s Metro (MM) will be an online virtual clubhouse where you can bring your meeple to life. Interact with other meeples and play games in MM.</p>
                        </div>
                    </div>
                    <div class="pt-12 w-full">
                        <div class="h-60">
                            <header class="bg-quarternary text-white rounded-2xl py-3 px-6 w-fit">
                                <h3 class="text-3xl font-extrabold">7. $MOONIES</h3>
                            </header>
                            <p class="pt-1 text-xl font-extrabold leading-snug w-1/2">Stake your meeples to earn ERC20 tokens, $MOONIES, which are used to mint second collection of Meeple Cards!</p>
                        </div>
                    </div>
                    <div class="pt-12 w-full">
                        <div class="h-60">
                            <header class="bg-tertiary text-white rounded-2xl py-3 px-6 w-fit">
                                <h3 class="text-3xl font-extrabold">9. Meeple Mania launch</h3>
                            </header>
                            <p class="pt-1 text-xl font-extrabold leading-snug w-4/5">ver.1 of <span class="text-primary">Th</span><span class="text-quarternary">e M</span><span class="text-secondary">ee</span><span class="text-tertiary">pl</span><span class="text-quinary">es</span> PvP card game, Meeple Mania, will be released, build your own deck and card fight other Meeples!</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-2/5">
                    <div class="pt-24">
                        <div class="h-48">
                            <header class="ml-auto bg-quarternary text-white rounded-2xl py-3 px-6 w-fit">
                                <h3 class="text-3xl font-extrabold">2. The Meeples + MMM launch!</h3>
                            </header>
                            <p class="ml-auto pt-1 text-xl font-extrabold leading-snug w-11/12">Minting of the GENESIS collection of 5,555 Meeple Capsules. Meeple Capsules are used in the Magic Meeple Machine (MMM) to create your very own fully customizable meeple!</p>
                        </div>
                    </div>
                    <div class="pt-7">
                        <div class="h-48">
                            <header class="ml-auto bg-tertiary text-white rounded-2xl py-3 px-6 w-fit">
                                <h3 class="text-3xl font-extrabold">4. Collaborations</h3>
                            </header>
                            <p class="ml-auto pt-1 text-xl font-extrabold leading-snug w-7/12">Collabs with projects that the team and community believes in; long-term partnerships, whitelist spots, AMAs, etc.</p>
                        </div>
                    </div>
                    <div class="pt-12 w-full">
                        <div class="h-52">
                            <header class="ml-auto bg-primary text-white rounded-2xl py-3 px-6 w-fit">
                                <h3 class="text-3xl font-extrabold">6. New alpha system</h3>
                            </header>
                            <p class="ml-auto pt-1 text-xl font-extrabold leading-snug w-8/12">A more extensive, complete and in depth alpha system will be introduced in Meeple’s Metro, replacing the discord one. Equipped with many useful tools.</p>
                        </div>
                    </div>
                    <div class="pt-12 w-full">
                        <div class="h-60">
                            <header class="ml-auto bg-secondary text-white rounded-2xl py-3 px-6 w-fit">
                                <h3 class="text-3xl font-extrabold">8. Meeples Card Collection!</h3>
                            </header>
                            <p class="ml-auto pt-1 text-xl font-extrabold leading-snug w-5/6">Use your $MOONIES to mint booster card packs for the upcoming P2E card game, Meeple Mania! 5 Nations, 4 Rarities, collect your cards and build the best deck!</p>
                        </div>
                    </div>
                </div>
            </div>
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
