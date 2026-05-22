function formatCurrency(amount) {
    return amount.toLocaleString('en-US') + ' $';
}
function formatDate() {
    return new Date().toISOString().split('T')[0];
}
