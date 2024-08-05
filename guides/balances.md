# Payments balances section

The User Balances section provides a comprehensive overview of all transaction values associated with a specific user. This section allows us to examine detailed information to ensure that the user's balances have been accurately recorded and maintained.

By reviewing the data presented in this section, you can verify the integrity of financial transactions, identify any discrepancies, and ensure that the user's financial activities align with expected outcomes. This section is crucial for maintaining transparency and accuracy in financial reporting.

## Categories Overview

The User Balances section is divided into several categories, each providing specific insights into the user's financial activities. Below are brief descriptions of each category:

[**General Overview**](#general-overview)

This section displays all transactions the user has engaged in and the payment records within our system. Any discrepancies within our system are highlighted in red, allowing for easy identification and resolution.

[**Wallet Payments**](#wallet-payments)

Shows the payments made using the user's wallet. This category provides detailed information on each wallet transaction, helping users track their spending and verify wallet usage.

[**Wallet Loads**](#wallet-loads)

These are the charges a user has made to their wallet. It offers a clear view of the funds added to the wallet, ensuring transparency in wallet top-ups and balances.

[**Payments Data**](#payments-data)

This category lists the $0.50 charges made to a user for registering their cards. It helps users keep track of these small but essential registration fees, ensuring they are correctly processed.

[**User Dues**](#user-dues)

Displays the dues registered in our system. This section allows users to view and manage any outstanding debts, ensuring they are aware of all financial obligations.

[**Stripe Data**](#stripe-data)

A crucial section that showcases all payment information processed through Stripe. This data is primarily used to verify that users have been correctly charged, offering a detailed view of each transaction's success and accuracy.

[**Balance**](#balances)

This section provides a detailed table with all necessary data to ensure the balance is accurate and that our system aligns with Stripe's records. It is an essential tool for verifying financial integrity and maintaining consistency across platforms.

## General Overview

The **General Overview** section provides a comprehensive view of all transactions associated with a user. This section is designed to give a clear and detailed insight into the financial activities and status of each transaction. It highlights any discrepancies or issues by displaying them in red, making it easy for users to identify and address problems promptly.

This section is particularly useful for financial auditing and ensuring that the transactions recorded in our system match those expected by the user. It allows for a thorough examination of each transaction's components, offering transparency and clarity.

Below is the structure of the data presented in this section:

| **Field**              | **Description**                                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Transaction**        | The ID of the transaction. This unique identifier helps track and reference specific transactions easily.                                        |
| **Status**             | The status of the transaction. Indicates whether the transaction is complete, pending, or failed.                                                |
| **Date**               | The date when the transaction occurred. Provides a timeline for the user's financial activities.                                                 |
| **Total**              | The total amount of the transaction. Reflects the overall value involved in the transaction.                                                     |
| **Card Validations**   | Validations performed with the card. This ensures that the card used is legitimate and authorized.                                               |
| **Card Payments**      | Payments made using the card. Details the amount paid via credit or debit card during the transaction.                                           |
| **Wallet Validations** | Validations performed using the wallet. Confirms the authenticity and authorization of wallet usage.                                             |
| **Wallet Payment**     | Payments made through the wallet. Shows the amount deducted from the user's wallet for the transaction.                                          |
| **Missing**            | If any payment is missing in our system, this number will not be zero. Highlights discrepancies needing attention.                               |
| **Balance**            | A calculation of validations + payments, which should equal the total transaction amount. Ensures consistency and accuracy in financial records. |

### How to Use This Section

1. **Review Transactions:** Start by examining the Transaction ID to identify the specific transaction you wish to review.

2. **Check Status:** Look at the status to determine the current state of the transaction. Any discrepancies will be highlighted for easy identification.

3. **Verify Amounts:** Compare the Total with the combined amounts of Card Payments and Wallet Payments. Ensure that these figures align correctly.

4. **Investigate Missing Amounts:** If the Missing field shows a non-zero value, investigate further to find any potential issues in payment processing.

5. **Confirm Balance:** Ensure that the calculated Balance matches the Total. This serves as a final check to verify the transaction's integrity.

By utilizing this section, you can maintain accurate records and address any potential issues promptly, ensuring a smooth financial experience for users.

## Wallet Payments

The **Wallet Payments** section is dedicated to providing an in-depth look at the financial transactions conducted through the user's wallet. This section aims to enhance transparency and understanding of wallet activities, allowing users to track their spending and fund movements accurately.

This section includes various types of wallet operations, such as additions, subtractions, and special operations like cashback. By examining this data, users can gain insights into their wallet's performance and ensure that all transactions are accurately recorded and reflected in their balances.

Below is the structure of the data presented in this section:

| **Field**        | **Description**                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Id**           | The unique identifier for each wallet transaction. It allows easy tracking and referencing of transactions.               |
| **Date**         | The date of the wallet transaction. Provides a chronological record of wallet activities.                                 |
| **Movement**     | An enum indicating whether the transaction is an addition or subtraction. Helps understand the nature of the transaction. |
| **Operation**    | An enum describing how the transaction was performed, such as cashback. Offers insight into the type of wallet operation. |
| **Last Balance** | The user's wallet balance before the transaction. Shows the starting point of the wallet for the transaction.             |
| **New Balance**  | The user's wallet balance after the transaction. Reflects the updated balance post-transaction.                           |
| **Amount**       | The amount involved in the wallet transaction. Indicates the exact value of the addition or subtraction.                  |

### How to Use This Section

1. **Identify Transactions:** Start by using the Id field to locate specific transactions of interest.

2. **Review Dates:** Check the Date to place each transaction within a timeline of wallet activities.

3. **Understand Movements:** Look at the Movement enum to determine if the transaction added or subtracted funds from the wallet.

4. **Examine Operations:** Analyze the Operation enum to understand the nature of the transaction, such as whether it was a cashback or other operation.

5. **Verify Balances:** Compare the Last Balance and New Balance to ensure they align with the transaction Amount. This helps confirm the accuracy of wallet balances.

By utilizing this section, users can maintain a comprehensive understanding of their wallet activities, ensuring all transactions are recorded accurately and transparently. This section serves as an essential tool for users to manage their finances effectively.

## Wallet Loads

The **Wallet Loads** section provides detailed information about the charges or funds that a user has added to their wallet. This section is crucial for understanding the user's wallet top-ups and ensuring that all wallet loading transactions are accurately recorded and processed.

By reviewing the data in this section, users can verify their wallet loading activities, ensuring that each transaction is reflected correctly in their wallet balance. This helps maintain transparency and accuracy in wallet management.

Below is the structure of the data presented in this section:

| **Field**    | **Description**                                                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Id**       | The unique identifier for each wallet load transaction. Allows for easy tracking and referencing of wallet loads.                  |
| **Status**   | The status of the wallet load transaction. Indicates whether the load was successful, pending, or failed.                          |
| **Date**     | The date when the wallet load transaction occurred. Provides a timeline for wallet top-ups.                                        |
| **Movement** | The ID associated with the movement registered in the database. This ID helps link the wallet load to specific recorded movements. |
| **Payment**  | The ID of the associated payment transaction. Links the wallet load to a specific payment event.                                   |
| **Amount**   | The amount of funds added to the wallet. Reflects the value of the wallet load transaction.                                        |

### How to Use This Section

1. **Identify Wallet Loads:** Use the **Id** field to locate specific wallet load transactions of interest.

2. **Check Status:** Review the **Status** to understand the current state of the wallet load transaction. Look for any pending or failed loads that may need attention.

3. **Verify Dates:** Examine the **Date** to place each wallet load within a chronological context, tracking the timeline of wallet top-ups.

4. **Link Movements:** Use the **Movement** ID to connect the wallet load transaction with the corresponding movement recorded in the database, ensuring proper linkage and context for each load.

5. **Link Payments:** Refer to the **Payment** ID to connect each wallet load with its associated payment transaction, ensuring all related activities are accounted for.

6. **Confirm Amounts:** Verify that the **Amount** added to the wallet is correct and matches the expected value for each wallet load transaction.

By utilizing this section, users can maintain a clear and accurate record of all funds added to their wallet, ensuring their wallet balance is correctly updated and reflecting all wallet loads.

## Payments Data

The **Payments Data** section provides a detailed view of the charges made to users for various financial activities, specifically focusing on small but essential fees like card registration charges. This section is crucial for understanding how these charges are processed and ensuring that they are accurately reflected in the user's account.

This section helps users track specific payment events, offering insights into how fees are applied and confirming that they align with the expected values. By maintaining a transparent record of these payments, users can have confidence in the integrity of their financial data.

Below is the structure of the data presented in this section:

| **Field**   | **Description**                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Id**      | The unique identifier for each payment transaction. Allows for easy tracking and referencing of specific payments.                          |
| **Date**    | The date when the payment transaction occurred. Provides a chronological record of when fees were applied.                                  |
| **Payment** | The ID of the payment registered in the database. Links the charge to a specific payment record, ensuring proper tracking and verification. |
| **Amount**  | The amount charged for the payment transaction. Reflects the specific value involved in the charge, such as card registration fees.         |

### How to Use This Section

1. **Identify Payments:** Use the **Id** field to locate specific payment transactions of interest.

2. **Review Dates:** Check the **Date** to understand when each payment transaction occurred, placing it within a timeline of user activities.

3. **Link Payments:** Use the **Payment** ID to connect the payment transaction with its corresponding record in the database, ensuring accurate tracking and verification.

4. **Verify Amounts:** Confirm that the **Amount** charged matches the expected fee for each transaction, such as card registration charges.

By utilizing this section, users can ensure that all small fees and charges are accurately recorded and reflect the true state of their financial interactions. This section serves as a vital tool for maintaining transparency and accuracy in managing user accounts.

## User Dues

The **User Dues** section provides an overview of the outstanding debts and obligations that a user has registered in our system. This section is essential for understanding the financial responsibilities of each user and ensuring that all dues are accurately tracked and managed.

Due to occasional discrepancies in our system's recording of dues payments, it is crucial to verify the transactions against Stripe records. This cross-verification ensures that all payments are correctly registered and that no obligations are missed or inaccurately reported.

By reviewing the data in this section, users can gain insights into their outstanding dues, monitor payment progress, and ensure that all obligations are being met. This section aids in maintaining transparency and accountability in financial management.

Below is the structure of the data presented in this section:

| **Field**     | **Description**                                                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Id**        | The unique identifier for each due record. Allows for easy tracking and referencing of specific dues.                                    |
| **Date**      | The date when the due was registered or updated. Provides a timeline for when the obligation was recorded.                               |
| **Due Type**  | An enum representing the type of due. This categorizes the nature of the obligation, such as rent, loan, etc.                            |
| **Value**     | The total value of the due. Reflects the amount owed by the user for this particular obligation.                                         |
| **Paid**      | The amount that has been paid towards the due. Indicates progress in fulfilling the financial obligation.                                |
| **Remaining** | The remaining amount left to be paid. Shows what is still owed by the user.                                                              |
| **Status**    | The status of the due, indicating whether it is paid, pending, or overdue. Provides a quick view of the current state of the obligation. |

### How to Use This Section

1. **Identify Dues:** Use the **Id** field to locate specific due records of interest.

2. **Review Dates:** Check the **Date** to understand when each due was registered or updated, placing it within a timeline of user obligations.

3. **Categorize Dues:** Use the **Due Type** enum to categorize and understand the nature of each obligation.

4. **Track Payments:** Monitor the **Value**, **Paid**, and **Remaining** fields to understand the progress of payments towards fulfilling the due.

5. **Check Status:** Review the **Status** to see the current state of each due, ensuring that no obligations are overdue or need immediate attention.

6. **Verify with Stripe:** Always cross-check dues payments with Stripe records to confirm that our system has accurately recorded all transactions. This step is crucial to prevent any discrepancies or errors in the due records.

By utilizing this section, users can effectively manage their financial obligations, track payment progress, and ensure that all dues are being handled responsibly. The additional verification with Stripe serves as a vital step in maintaining accuracy and transparency in financial management.

## Stripe Data

The **Stripe Data** section provides a detailed view of all payment transactions recorded by Stripe. This section is crucial for understanding the payment activity processed through Stripe's API, offering insights into each charge's details and status.

By examining this data, users can ensure that all transactions are accurately recorded and that payments have been correctly processed. This section is essential for verifying the integrity of payment operations and resolving any discrepancies between our system and Stripe.

Below is the structure of the data presented in this section:

| **Field**       | **Description**                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| **Amount**      | The total amount of the charge as recorded by Stripe. Reflects the value of the payment transaction.         |
| **Captured**    | Indicates whether the charge has been captured or not. Shows if the payment has been finalized.              |
| **Created**     | The timestamp when the charge was created. Provides the date and time when the payment was initiated.        |
| **Customer id** | The unique identifier for the customer associated with the charge. Links the payment to a specific customer. |
| **Status**      | The status of the charge. Indicates whether the payment is succeeded, pending, failed, or any other status.  |

### How to Use This Section

1. **Review Amounts:** Check the **Amount** to verify the total value of each charge recorded by Stripe.

2. **Check Captured Status:** Look at the **Captured** field to ensure that the payment has been finalized and successfully captured.

3. **Verify Creation Dates:** Use the **Created** timestamp to track when each charge was initiated, providing context for the payment activity.

4. **Link Customers:** Utilize the **Customer id** to connect each charge with the respective customer, ensuring accurate customer records and payment associations.

5. **Monitor Status:** Review the **Status** of each charge to understand the current state of the payment and identify any that require further action or resolution.

By utilizing this section, users can effectively monitor and verify all payment transactions processed through Stripe, ensuring that all charges are recorded accurately and that payment operations are functioning correctly.

## Balances

The **Balances** section provides a comprehensive summary of all financial data related to user transactions, payments, and balances. This section aggregates information from various sources to offer a clear picture of the user's financial status, helping to ensure accuracy and transparency in balance calculations.

By reviewing this section, users can verify that all financial activities are correctly accounted for and that the balance reflects all relevant transactions. This section is crucial for reconciling account data and confirming that all figures align with expected values.

Below is the structure of the data presented in this section:

| **Field**                     | **Description**                                                                                                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Transactions Total Amount** | The total amount of all transactions recorded. This provides an aggregate view of all transaction values.                                                         |
| **Payments Data**             | The total amount of charges recorded in the Payments Data section. This summarizes card registration fees and other related charges.                              |
| **Wallet Loads**              | The total amount of funds added to the wallet. This reflects all wallet loading transactions.                                                                     |
| **Wallet Payments**           | The total amount spent from the wallet. This includes all wallet payment transactions.                                                                            |
| **Wallet Validations**        | The total amount of wallet validations. This indicates the value of all wallet validation checks performed.                                                       |
| **Extra Refunds**             | The total amount of refunds issued. This includes charges between $0.5 and $1, which are returned to the wallet due to Stripe's minimum charge limit. ($1 Dollar) |
| **Due**                       | The calculated amount of outstanding dues. This is derived from a specific calculation method.                                                                    |
| **Stripe**                    | The total amount recorded by Stripe charges. This provides a summary of all transactions processed through Stripe.                                                |
| **Balance**                   | The final calculated balance. This is derived from combining various financial data points to ensure accuracy.                                                    |

### How to Calculate Dues and Balance

- **Calculating Due:**
  The amount of outstanding dues is determined by considering the total amount of transactions, adding payments data and wallet loads, and then subtracting wallet validations and payments. Refunds are also included in the calculation. This process ensures that all financial activities are accounted for when calculating the outstanding dues.

> Total + Payments Data + Wallet Loads + Extra refunds - Wallet Validations - Wallet payments

- **Calculating Balance:**
  The final balance is calculated by adding the total transaction amount, payments data, wallet loads and extra refunds. Then, wallet payments and validations are subtracted, and Stripe data is added. This comprehensive calculation ensures that all relevant financial data points are included to provide an accurate final balance.

> Due - Stripe = 0

### How to Use This Section

1. **Review Total Amounts:** Check the **Transactions Total Amount** to understand the overall transaction volume.

2. **Analyze Payments and Loads:** Examine the **PAYMENTS DATA**, **WALLET LOADS**, and **WALLET PAYMENT** to track specific types of financial activities.

3. **Validate Transactions:** Review **WALLET VALIDATIONS** to ensure all wallet validation activities are correctly recorded.

4. **Calculate Due:** Use the described method to compute the **DUE** amount, ensuring all relevant transactions are accounted for.

5. **Check Stripe Data:** Verify the **STRIPE** amount to ensure that all Stripe transactions are accurately recorded.

6. **Determine Balance:** Apply the balance calculation method to ensure the final **BALANCE** reflects all relevant financial data accurately.

By utilizing this section, users can effectively monitor their financial status, reconcile transactions, and ensure that their balances are accurate and up-to-date.
