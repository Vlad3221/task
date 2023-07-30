import {Component, Vue} from 'vue-facing-decorator';
import { ref } from 'vue';
import tableLine from '@/components/tableLine/index.vue';
import createNewBlock from '@/components/createNewBlock/index.vue';
import draggable from 'vuedraggable';

@Component({
    name: "homePage",
    components: {
        tableLine,
        createNewBlock,
        draggable
    },
})
export default class homePage extends Vue {

    public data = ref([
        {
            num: 1,
            textTovar: 'Мраморный щебень фр. 2-5 мм, 25кг',
            prise: 1231,
            quantity: 12,
            description: 'Мраморный щебень',
            result: 1231
        },
        {
            num: 2,
            textTovar: 'Мраморный щебень фр. 2-5 мм, 25кг',
            prise: 1231,
            quantity: 12,
            description: 'Мраморный щебень',
            result: 1231
        },{
            num: 3,
            textTovar: 'Мраморный щебень фр. 2-5 мм, 25кг',
            prise: 1231,
            quantity: 12,
            description: 'Мраморный щебень',
            result: 1231
        },{
            num: 4,
            textTovar: 'Мраморный щебень фр. 2-5 мм, 25кг',
            prise: 1231,
            quantity: 12,
            description: 'Мраморный щебень',
            result: 1231
        },{
            num: 5,
            textTovar: 'Мраморный щебень фр. 2-5 мм, 25кг',
            prise: 1231,
            quantity: 12,
            description: 'Мраморный щебень',
            result: 1231
        },{
            num: 6,
            textTovar: 'Мраморный щебень фр. 2-5 мм, 25кг',
            prise: 1231,
            quantity: 12,
            description: 'Мраморный щебень',
            result: 1231
        },{
            num: 7,
            textTovar: 'Мраморный щебень фр. 2-5 мм, 25кг',
            prise: 1231,
            quantity: 12,
            description: 'Мраморный щебень',
            result: 1231
        },
    ])

    public getVisible = false
}