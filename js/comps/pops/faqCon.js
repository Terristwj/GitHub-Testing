Vue.component('app-faqCon', {
    template:
    `
    <section @click.prevent="closeComp" class="absolute top-0 left-0 px-20 py-40 w-full h-full bg-black/30 z-50" id="portraitCon">
        <div @click.prevent.stop class="relative rounded-lg bg-white h-full w-full overflow-y-scroll">
            <header class="rounded-t-lg h-10 w-full bg-primary" id="faqHeader"></header>
            <article class="pt-12 px-40 w-full z-50">
                <h1 class="text-6xl text-center text-primary font-extrabold leading-tight">Frequently Asked Questions (FAQs)</h1>
                <div class="my-20">
                    <div class="mt-8">
                        <h6 class="text-3xl font-extrabold">How many meeples will there be?</h6>
                        <p class="mt-1 text-lg font-bold leading-snug">There will be 5,555 GENESIS Meeple Capsules available for mint. Capsules can be used in the Magic Meeple Machine (MMM) to create your very own fully customizable meeple!</p>
                    </div>
                    <div class="mt-8">
                        <h6 class="text-3xl font-extrabold">What is the mint price?</h6>
                        <p class="mt-1 text-lg font-bold leading-snug">0.05eth for WL sale, 0.07 for PUBLIC sale</p>
                    </div>
                    <div class="mt-8">
                        <h6 class="text-3xl font-extrabold">Where and Wen?</h6>
                        <p class="mt-1 text-lg font-bold leading-snug">Mint ONLY at our official website; www.meeples.com. Minting will be sometime in April, exact date TBA in our discord channel!</p>
                    </div>
                    <div class="mt-8">
                        <h6 class="text-3xl font-extrabold">What benefits do i get as a Meeple holder?</h6>
                        <p class="mt-1 text-lg font-bold leading-snug">2 per wallet for WL sale, 5 per wallet for PUBLIC sale</p>
                    </div>
                    <div class="mt-8">
                        <h6 class="text-3xl font-extrabold">How many meeples can i buy?</h6>
                        <p class="mt-1 text-lg font-bold leading-snug">A ton, like seriously! Click on the chest to read more on the holder’s benefits, or learn more from <span class="text-primary">Th</span><span class="text-quarternary">e M</span><span class="text-secondary">ee</span><span class="text-tertiary">pl</span><span class="text-quinary">es</span> whitepaper.</p>
                    </div>
                    <div class="mt-8">
                        <h6 class="text-3xl font-extrabold">What nation Meeple will i get?</h6>
                        <p class="mt-1 text-lg font-bold leading-snug">The nation of your meeple will be randomly distributed during mint in order to maintain an equal distribution of each nation. Do not worry tho, all of the nations are equal and just as cool as the rest!</p>
                    </div>
                    <div class="mt-8">
                        <h6 class="text-3xl font-extrabold">Cool, I want to know more! </h6>
                        <p class="mt-1 text-lg font-bold leading-snug">Nice! We warmly welcome you to join our discord channel where you can learn more about <span class="text-primary">Th</span><span class="text-quarternary">e M</span><span class="text-secondary">ee</span><span class="text-tertiary">pl</span><span class="text-quinary">es</span>, ask questions and hang out with the friendly team and community :D</p>
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
