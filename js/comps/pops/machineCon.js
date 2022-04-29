Vue.component('app-machineCon', {
    template:
    `
    <section @click.prevent="closeComp" class="absolute top-0 left-0 px-20 py-40 w-full h-full bg-black/30 z-50" id="portraitCon">
        <div @click.prevent.stop class="relative rounded-lg bg-white h-full w-full overflow-y-scroll">
            <header class="rounded-t-lg h-10 w-full bg-secondary" id="machineHeader"></header>\
            <div class="p-4" style="position:absolute;">
                <button class="hover:animate-pulse block text-4xl font-extrabold" @click.prevent="closeComp">&#x2715</button>
            </div>
            <div class="absolute mx-auto mt-96 z-40 w-full flex justify-center">
                <img class="object-fit" src="./Resources/Magic Meeple Machine (build-your-own-meeple).png" alt="Magic Meeple Machine">
            </div>
            <article class="pt-12 px-8 w-full z-50">
                <h2 class="text-6xl font-extrabold text-center text-secondary">Magic Meeple Machine (build-your-own-meeple)</h2>
                <div class="pt-12 px-60 grid grid-cols-3 gap-20">
                    <p class="text-3xl font-extrabold leading-snug">1. 5,555 GENESIS Meeple Capsules from <span class="text-primary">Th</span><span class="text-quarternary">e M</span><span class="text-secondary">ee</span><span class="text-tertiary">pl</span><span class="text-quinary">es</span> collection are discovered and minted on the ethereum blockchain.</p>
                    <p class="text-3xl font-extrabold leading-snug">2. Each Meeple Capsule can only be processed in the Magic Meeple Machine (MMM). Adopt your very own personal, fully customizable, one of millions meeple!</p>
                    <p class="text-3xl font-extrabold leading-snug">3. wawaweewa! Many adventures now await you and your very own Meeple! (you can even give it a name if you like)</p>
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
