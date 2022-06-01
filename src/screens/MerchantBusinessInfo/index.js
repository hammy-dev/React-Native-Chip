import { View, Text } from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Card from '../../components/Cards/index';
import AUX from '../../components/AUX-';
import styles from './styles';

// "eslint(react-native/no-inline-styles):0"

function MerchantBusinessInfo() {
  return (
    <AUX>
      <View style={styles.container}>
        <Card>
          <Text style={styles.header}>Tap each category to see the defination </Text>
          <View style={styles.innerContainer}>
            <Collapse>
              <CollapseHeader>
                <Text style={[styles.headerText]}>Food & Beverages</Text>
              </CollapseHeader>
              <CollapseBody>
                <Text
                  style={styles.body}
                >
                  Merchants that engage in the sale of food and drinks to customers
                </Text>
              </CollapseBody>
            </Collapse>
          </View>
          <View style={styles.innerContainer}>
            <Collapse>
              <CollapseHeader>
                <Text style={[styles.headerText,
                  styles.headerText2]}
                >
                  Supermarkets & Minimarkets

                </Text>
              </CollapseHeader>
              <CollapseBody>
                <Text style={styles.body}>
                  Retail markets that sell produce and household goods
                </Text>
              </CollapseBody>
            </Collapse>
          </View>
          <View style={styles.innerContainer}>
            <Collapse>
              <CollapseHeader>
                <Text style={[styles.headerText, styles.headerText3]}>Retail & Services</Text>
              </CollapseHeader>
              <CollapseBody>
                <Text style={styles.body}>
                  Merchants who are engaged in the sale of tangible goods to customers,
                  such as hardware,clothing, appliances, electronics,books.
                  Merchants who are engaged in the sale of intangible goods or experience to
                  customers,such as professional services,
                  social services, and personal services.
                </Text>
              </CollapseBody>
            </Collapse>
          </View>
          <View style={styles.innerContainer}>
            <Collapse>
              <CollapseHeader>
                <Text style={[styles.headerText, styles.utilities]}>Utilities</Text>
              </CollapseHeader>
              <CollapseBody>
                <Text style={styles.body}>
                  Organizations supplying the community with electricity, gas, water, or sewerage
                </Text>
              </CollapseBody>
            </Collapse>
          </View>
          <View style={styles.innerContainer}>
            <Collapse>
              <CollapseHeader>
                <Text style={[styles.headerText, styles.others]}>Other</Text>
              </CollapseHeader>
              <CollapseBody>
                <Text style={styles.body}>
                  Any merchant that does not fit the listed categories.
                </Text>
              </CollapseBody>
            </Collapse>
          </View>
        </Card>
      </View>
    </AUX>
  );
}
export default MerchantBusinessInfo;
