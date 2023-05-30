// Blog gönderilerini almak için bir dizi oluşturun
var blogPosts = [
    {
        id: 1,
        title: "Blog Gönderisi 1",
        content: "Bu blog gönderisi hakkında bir şeyler...",
        author: "John Doe",
        date: "2023-05-01"
    },
    {
        id: 2,
        title: "Blog Gönderisi 2",
        content: "Bu blog gönderisi hakkında bir şeyler...",
        author: "Jane Smith",
        date: "2023-05-05"
    }
];

// Ana sayfadaki blog gönderilerini listelemek için bir fonksiyon oluşturun
function listBlogPosts() {
    var blogPostsSection = document.getElementById("blog-posts");
    blogPostsSection.innerHTML = "";

    for (var i = 0; i < blogPosts.length; i++) {
        var post = blogPosts[i];

        var postElement = document.createElement("div");
        postElement.innerHTML = "<h3>" + post.title + "</h3><p>" + post.content + "</p><p><small>Yazar: " + post.author + " | Tarih: " + post.date + "</small></p>";

        blogPostsSection.appendChild(postElement);
    }
}

// Yeni gönderi oluşturma formu gönderildiğinde çalışacak bir fonksiyon oluşturun
function createBlogPost(event) {
    event.preventDefault();

    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    var author = document.getElementById("author").value;

    var newPost = {
        id: blogPosts.length + 1,
        title: title,
        content: content,
        author: author,
        date: getCurrentDate()
    };

    blogPosts.push(newPost);

    // Yeni gönderi oluşturulduktan sonra ana sayfaya yönlendirme yapılabilir
    window.location.href = "index.html";
}

// Geçerli tarihi almak için bir yardımcı fonksiyon oluşturun
function getCurrentDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}

// Ana sayfa yüklendiğinde blog gönderilerini listele
window.onload = function() {
    listBlogPosts();
}
