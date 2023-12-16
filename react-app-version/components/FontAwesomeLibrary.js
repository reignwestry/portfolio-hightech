import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core' // <-- import styles to be used

//todo ADD Fontawesome icons to all knowledge Path lists

export default function FontAwesome() {
    return (
        <div style={{background: "lightblue"}
}>
            
            <FontAwesomeIcon icon="fa-brands fa-html5" />
            {/* <FontAwesomeIcon icon={regular('coffee')} />
            <FontAwesomeIcon icon={brands('twitter')} /> */}
        </div>
    )
}