# Instructions for Refunding Charges in Stripe

## 1. Access the Stripe Dashboard

- Go to the [Stripe Dashboard](https://dashboard.stripe.com/).

## 2. Navigate to the Transactions Section

- From the sidebar, select **Transactions** to view the payment history.

## 3. Filter by Stripe ID

- To search for a specific transaction, click on **More filters**.
- Enter the user's **Stripe ID** in the appropriate field. **Note:** Be sure not to confuse this ID with the Dillo ID.

## 4. Process the Refund

- Once you've located the user's transactions:
  1. **Identify the recent transactions** you want to refund.
  2. Start refunding from the most recent transactions, summing the amounts until the desired total is reached.
  3. For example, if you need to refund $20 and the user's recent transactions are $10 and $15:
     - Refund $10 from the most recent $10 transaction.
     - From the $15 transaction, refund the remaining $10 to complete the $20 total.

## 5. Save the Refund Record in the Database

- After processing the refund, it's crucial to save the record in the database:
  1. Open **Postman**.
  2. Navigate to the **transactions** collection and select the **refunds** subcategory.
  3. Go to the **Create Manual Refund Record** endpoint.
  4. In the request body, enter the following details:

     ```json
     {
         "refund": 1,
         "user": "User-id",
         "currency": "Currency-id",
         "amount": 50
     }
     ```

     - Replace `"User-id"` with the Dillo user ID.
     - Replace `"Currency-id"` with the currency ID (e.g., for dollars).
  5. After making the request, you can verify that the record was created successfully by checking the **all refunds** endpoint.
