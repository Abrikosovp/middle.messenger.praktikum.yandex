

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
import {BlockProps, Indexed, TBlockConnect} from "../../utils/types/types";
import Store, {StoreEvents, TStore} from "../store/Store";

export function connect(Component: TBlockConnect, mapStateToProps: (state: TStore) => Indexed) {
    return class extends Component {
        constructor(props: BlockProps) {
            super({...props, ...mapStateToProps(Store.getState())});
            Store.on(StoreEvents.Updated, () => {
                this.setProps({...mapStateToProps(Store.getState())});
            });
        }
    };
}
