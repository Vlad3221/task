import {Component, Vue} from 'vue-facing-decorator';
import tableLine from '@/components/tableLine/index.vue';
import createNewBlock from '@/components/createNewBlock/index.vue';

@Component({
    name: "homePage",
    components: {
        tableLine,
        createNewBlock
    },
})
export default class homePage extends Vue {
    public test: boolean = false;

    public movedIndex: number | undefined;

    public data = [
        {
            num: 1,
            textTovar: 'test',
            prise: 20,
            quantity: 1,
            description: 'test',
            result: 1234
        },
        {
            num: 2,
            textTovar: 'test',
            prise: 20,
            quantity: 1,
            description: 'test',
            result: 1234
        }
    ]

    public lineMoved(index:number) {
        this.movedIndex = index
    }
}