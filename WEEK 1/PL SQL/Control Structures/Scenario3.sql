SET SERVEROUTPUT ON;

BEGIN
    FOR loan_rec IN (
        SELECT customer_id, loan_id, due_date
        FROM loans
        WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer ' || loan_rec.customer_id ||
            ' has Loan ' || loan_rec.loan_id ||
            ' due on ' || TO_CHAR(loan_rec.due_date, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/