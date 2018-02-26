Qoute = {
    BillGatesQoutes: [
        'Success is a lousy teacher. It seduces smart people into thinking they cant lose.',
        'I believe in innovation and that the way you get innovation is you fund research and you learn the basic facts',
        'Everyone needs a coach. It doesnt matter whether youre a basketball player, a tennis player, a gymnast or a bridge player.',
        "Don't compare yourself with anyone in this world...if you do so, you are insulting yourself.",
        "I failed in some subjects in exam, but my friend passed in all. Now he is an engineer in Microsoft and I am the owner of Microsoft.",
        "If you can't make it good, at least make it look good.",
        "Your most unhappy customers are your greatest source of learning.",
        "I studied every thing but never topped.... But today the toppers of the best universities are my employees",
        "Most people overestimate what they can do in one year and underestimate what they can do in ten years.",
        "If you are born poor its not your mistake, But if you die poor its your mistake.",
        "Life's not fair, get over it!",
        "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
        "When you have money in hand,only you forget who are you .But when you do not have any money in your hand,the whole world forget who you are.It's life.",
        "I believe that if you show people the problems and you show Them The Solutions They Will Be Moved To Act",
        "It's fine to celebrate success but it is more important to heed the lessons of failure.",
        "The best way to prepare [to be a programmer] is to write programs, and to study great programs that other people have written."
    ],
    SteveJobs: [
    "Design is not just what it looks like and feels like. Design is how it works.",
    "the people who are crazy enough to think they can change the world are the ones who do.",
    "Creativity is just connecting things.",
    "The heaviness of being successful was replaced by the lightness of being a beginner again.",
    "And the only way to do great work is to love what you do.... Don't settle",
    "Focusing is about saying No.",
    "When I was 17, I read a quote that went something like: 'If you live each day as if it was your last, someday you'll most certainly be right.' It made an impression on me, and since then, for the past 33 years, I have looked in the mirror every morning and asked myself: 'If today were the last day of my life, would I want to do what I am about to do today?' And whenever the answer has been 'No' for too many days in a row, I know I need to change something.",
    "When you grow up you tend to get told that the world is the way it is and you're life is just to live your life inside the world. Try not to bash into the walls too much. Try to have a nice family life, have fun, save a little money. That's a very limited life. Life can be much broader once you discover one simple fact: Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it… Once you learn that, you'll never be the same again.",
    "When you're doing something for yourself, or your best friend or family, you're not going to cheese out. If you don't love something, you're not going to go the extra mile, work the extra weekend, challenge the status quo as much.",
    "Sometimes life is going to hit you in the head with a brick. Don't lose faith.",
    "Innovation is the only way to win.",
    "Think Different",
    "Pixar is seen by a lot of folks as an overnight success, but if you really look closely, most overnight successes took a long time.",
    "Deciding what not to do is as important as deciding what to do.",
    "It had nothing to do with using [programs] for practical things, it had more to do with using them as a mirror of your thought process. To actually learn how to think. I think everyone in this country should learn to program a computer. Everyone should learn a computer language because it teaches you how to think. I think of computer science as a liberal art.",
    "People get confused; companies get confused. When they start getting bigger, they want to replicate their initial success. And a lot of them think, ‘Well, somehow, there’s some magic in the process of how that success was created.’ So they start to institutionalize process across the company. And before very long, people start to get confused that the process is the content. And that’s ultimately the downfall of IBM. IBM has the best process people in the world. They just forgot about the content. And that happened a little bit at Apple, too. We had a lot of people who were great at management process. They just didn’t have a clue about the content. In my career, I found that the best people are the ones that really understand the content. And they’re a pain in the butt to manage! But you put up with it because they’re so great at the content. And that’s what makes great products. It’s not process, it’s content.",
    "I don’t really care about being right, I just care about success. You’ll find a lot of people that will tell you I had a very strong opinion, and they presented evidence to the contrary and five minutes later I changed my mind. I don’t mind being wrong, and I’ll admit that I’m wrong a lot. It doesn’t really matter to me too much. What matters to me is that we do the right thing",
    "The hardest thing when you think about focusing. You think focusing is about saying 'Yes.' No. Focusing is about saying 'No.' And when you say 'No,' you piss off people.",
    "Every good product I've ever seen is because a group of people cared deeply about making something wonderful that they and their friends wanted. They wanted to use it themselves.",
    ],
    GetBillGetsRandomQoute: function () {
        var BillGatesQoutes = Math.floor((Math.random() * (Qoute.BillGatesQoutes.length)) + 1);
        return Qoute.BillGatesQoutes[BillGatesQoutes];
    },

    GetSteveJobsRandomQoute: function () {
        var SteveJobsQuete = Math.floor((Math.random() * (Qoute.SteveJobs.length)) + 1);
        return Qoute.SteveJobs[SteveJobsQuete];
    }
}

var Game = {

    //-----------------------Variables-------------------------
    horizontalCell: 32,
    VerticalCell: 15,
    pockManPostionparseId: null,
    SteveJobsScore: 0,
    BillGatesScore: 0,
    BillGatesWon: null,
    BillGatesGoal: [],
    BillGatesGoalNumber: 30,
    SteveJobsGoal: [],
    SteveJobsGoalNumber: 30,
    GameActorClass: ['tmpon', 'steve', 'block', 'Goal', 'BillGoal'],
    oldPockManPostionparseId: null,

    //-----------------------Main Fucnations-------------------------
    GetPostionOfPockMan: function () {
        if (Game.pockManPostionparseId == null) {
            $("td").each(function () {
                if ($(this).hasClass('tmpon')) {
                    Game.pockManPostionparseId = parseInt($(this).attr('id'));
                }
            });
        }
    },

    GetQoute: function myfunction(name) {
        debugger;
        if (name == 'bill') {
            $('#BillQouteText').text(this.GetBillGetsRandomQoute());
        } else if (name == 'steve') {
            $('#SteveQouteText').text(this.GetSteveJobsRandomQoute());
        }
    },

    GameOver: function (item) {
        $('#GameStruct').remove();
        if (item == 'bill') {
            Game.GetQoute.call(Qoute, 'bill');
            $('#BillQoute').show(500);

        } else if (item == 'steve') {
            alert('Game Over');
            debugger;
            Game.GetQoute.call(Qoute, 'steve');
            $('#SteveQoute').show(500);
        }

    },

    stevePostionparseId: null,

    oldstevePostionparseId: null,

    GetPostionOfsteve: function () {
        if (Game.stevePostionparseId == null) {
            $("td").each(function () {
                if ($(this).hasClass('steve')) {
                    Game.stevePostionparseId = parseInt($(this).attr('id'));
                }
            });
        }
    },

    SpcifyItemsInGameTable: function (count, item) {
        function HasGameItemes(x, array) {
            var result = false;
            for (var i = 0; i < array.length; i++) {
                if ($('#' + x).hasClass(array[i])) {
                    result = true;
                    break;
                }

            }
            return result;
        };
        var array = []
        for (var i = 0; i < count;) {
            debugger;
            var x = Game.GetRandomNumberInTableGame();
            if (HasGameItemes(x, Game.GameActorClass) == false) {
                array.push(x);
                $('#' + x).addClass(item);
                i++;
            } else {

            }
        }
        return array
    },

    MakeGamePlane: function () {
        debugger;
        var trIdCounter = 1000;
        var tdIdCounter = 1;

        for (var o = 1; o <= Game.VerticalCell; o++) {
            $('#GamePalne').append('<tr id=' + trIdCounter + '></tr>');
            for (var i = 1; i <= Game.horizontalCell; i++) {
                $('#' + trIdCounter).append('<td id=' + tdIdCounter + '></td>')
                tdIdCounter++;
            }
            trIdCounter++;
        }

        var steve = Game.GetRandomNumberInTableGame();
        var Bill = Game.GetRandomNumberInTableGame();
        $('#' + Bill).addClass('tmpon');
        $('#' + steve).addClass('steve');
        //*************steve*************
        var SteveJobsGoalNumberResult = Game.SpcifyItemsInGameTable(Game.SteveJobsGoalNumber, 'Goal');
        Game.SteveJobsGoal = SteveJobsGoalNumberResult;
        //Game.CreateItemsInGame(Game.SteveJobsGoal, 'Goal');
        //*************Billi*************
        var BillGatesGoalNumberResult = Game.SpcifyItemsInGameTable(Game.BillGatesGoalNumber, 'BillGoal');
        Game.BillGatesGoal = BillGatesGoalNumberResult;
        //Game.CreateItemsInGame(Game.BillGatesGoal, 'BillGoal');
        ////*************Block*************
        // var BlockArrayResult = Game.SpcifyItemsInGameTable(10);
        // Game.CreateItemsInGame(BlockArrayResult, 'block');
        debugger;


        Game.BillGatesGoalNumber = $('.BillGoal').length;
        Game.GetPostionOfPockMan();
        Game.GetPostionOfsteve();
        debugger;
        Game.intelligence.RunIntelligenceMachin(Game.stevePostionparseId);
        window.setInterval(Game.Move.MoveInterval, 500);
    },

    GetRandomNumberInTableGame: function () {
        return Math.floor((Math.random() * (Game.horizontalCell * Game.VerticalCell)) + 1)
    },

    CreateItemsInGame: function (BlockArray, item) {
        for (var i = 0; i < BlockArray.length; i++) {
            $('#' + BlockArray[i]).removeClass()
            $('#' + BlockArray[i]).addClass(item);
        }
    },

    //-----------------------Move--------------------------
    Move: {
        LastMoveKey: null,
        Speed: 110,
        right: function (PockManClass, oldPostionparseId, PostionparseId) {
            futherMove = PostionparseId + 1;
            if (this.Collision(futherMove, 'right') == false)
                return;
            oldPostionparseId = PostionparseId;
            PostionparseId = futherMove;
            this.Move(PockManClass, oldPostionparseId, PostionparseId);
            return { oldPostionparseId: oldPostionparseId, PostionparseId: PostionparseId };
        },
        left: function (PockManClass, oldPostionparseId, PostionparseId) {
            futherMove = PostionparseId - 1;
            if (this.Collision(futherMove, 'left') == false)
                return;
            oldPostionparseId = PostionparseId;
            PostionparseId = futherMove;
            this.Move(PockManClass, oldPostionparseId, PostionparseId);
            return { oldPostionparseId: oldPostionparseId, PostionparseId: PostionparseId };
        },
        up: function (PockManClass, oldPostionparseId, PostionparseId) {
            futherMove = PostionparseId - Game.horizontalCell;
            if (this.Collision(futherMove, 'up') == false)
                return;
            oldPostionparseId = PostionparseId;
            PostionparseId = futherMove;
            this.Move(PockManClass, oldPostionparseId, PostionparseId);
            return { oldPostionparseId: oldPostionparseId, PostionparseId: PostionparseId };
        },
        down: function (PockManClass, oldPostionparseId, PostionparseId) {
            futherMove = PostionparseId + Game.horizontalCell;
            if (this.Collision(futherMove, 'down') == false)
                return;
            oldPostionparseId = PostionparseId;
            PostionparseId = futherMove;
            this.Move(PockManClass, oldPostionparseId, PostionparseId);
            return { oldPostionparseId: oldPostionparseId, PostionparseId: PostionparseId };
        },
        Move: function (PockManClass, oldPostionparseId, PostionparseId) {
            var td1 = 'td#' + oldPostionparseId;// Game.oldPockManPostionparseId;
            var td2 = 'td#' + PostionparseId; //Game.pockManPostionparseId;
            if ($(td1).hasClass(PockManClass)) {
                $(td1).removeClass(PockManClass);
            }
            $(td2).addClass(PockManClass);
        },
        Collision: function (pockManPostionparseId,Arrow) {
            var HasBlockClass = $('#' + pockManPostionparseId).hasClass('block');
            if (HasBlockClass || this.limitedArea(pockManPostionparseId, Arrow))
                return false;
            else
                return true;
        },
        limitedArea: function myfunction(pockManPostionparseId, Arrow) {

            function ArrivedLimit(pockManPostionparseId, Arrow) {
                if (Arrow=='right' &&   pockManPostionparseId % Game.horizontalCell == 1) {
                    return true;
                } else if (Arrow == 'left' && pockManPostionparseId % Game.horizontalCell == 0) {
                    return true;
                }
                return false;
            }
            //محمدوده دور بازی را می بندد که آدمک از صفحه بیرون نرود
            if (pockManPostionparseId <= 0 || pockManPostionparseId > (Game.horizontalCell * Game.VerticalCell) || ArrivedLimit(pockManPostionparseId, Arrow)) {
                return true;
            } else {
                return false;
            }
        },
        MoveInterval: function () {
            if (Game.Move.LastMoveKey == null)
                return;
            Postion = Game.Move.LastMoveKey;
            if (Postion == 39) {
                Game.Move.LastMoveKey = 39;
                var PostionInfo = Game.Move.right('tmpon', Game.oldPockManPostionparseId, Game.pockManPostionparseId);
                Game.oldPockManPostionparseId = PostionInfo.oldPostionparseId;
                Game.pockManPostionparseId = PostionInfo.PostionparseId;
                Game.Move.BillGateGoal(Game.pockManPostionparseId, 'BillGoal');
            }
            if (Postion == 37) {
                Game.Move.LastMoveKey = 37;
                var PostionInfo = Game.Move.left('tmpon', Game.oldPockManPostionparseId, Game.pockManPostionparseId);
                Game.oldPockManPostionparseId = PostionInfo.oldPostionparseId;
                Game.pockManPostionparseId = PostionInfo.PostionparseId;
                Game.Move.BillGateGoal(Game.pockManPostionparseId, 'BillGoal');
            }
            if (Postion == 40) {
                Game.Move.LastMoveKey = 40;
                var PostionInfo = Game.Move.down('tmpon', Game.oldPockManPostionparseId, Game.pockManPostionparseId);
                Game.oldPockManPostionparseId = PostionInfo.oldPostionparseId;
                Game.pockManPostionparseId = PostionInfo.PostionparseId;
                Game.Move.BillGateGoal(Game.pockManPostionparseId, 'BillGoal');
            }
            if (Postion == 38) {
                Game.Move.LastMoveKey = 38;
                var PostionInfo = Game.Move.up('tmpon', Game.oldPockManPostionparseId, Game.pockManPostionparseId);
                Game.oldPockManPostionparseId = PostionInfo.oldPostionparseId;
                Game.pockManPostionparseId = PostionInfo.PostionparseId;
                Game.Move.BillGateGoal(Game.pockManPostionparseId, 'BillGoal');
            }

        },
        BillGateGoal: function (PostionId, GoalClass) {
            if ($('#' + PostionId).hasClass(GoalClass)) {
                $('#' + PostionId).removeClass(GoalClass);
                Game.BillGatesScore = Game.BillGatesScore + 1;
                $('#BillGatesScore').text(Game.BillGatesScore);
                Game.BillGatesGoalNumber = Game.BillGatesGoalNumber - 1;
                if (Game.BillGatesGoalNumber == 0) {
                    //alert('Bill Gates Won!');
                    Game.BillGatesWon = true;
                    Game.GameOver('bill');
                    // location.reload();
                }
            }
        }
    },
    //-----------------------intelligence--------------------------
    intelligence: {

        MoveInX: function (nearGoal) {
            var X_Repeat = nearGoal.x;
            var sss = window.setInterval(function () {
                if (X_Repeat <= 0) {
                    window.clearTimeout(sss);
                    Game.intelligence.MoveInY(nearGoal)
                } else {
                    Game.intelligence.MoveMachin(nearGoal.xArrow, 'steve')
                    X_Repeat--;
                }
            }, Game.Move.Speed);
        },

        MoveInY: function (nearGoal) {
            var Y_Repeat = nearGoal.y;
            var sss = window.setInterval(function () {
                if (Y_Repeat <= 0) {
                    window.clearTimeout(sss);
                    $('#' + nearGoal.GoalId).removeClass('Goal');
                    Game.SteveJobsScore = Game.SteveJobsScore + 1;
                    $('#SteveJobsScore').text(Game.SteveJobsScore);
                    Game.intelligence.RunIntelligenceMachin(Game.stevePostionparseId);
                } else {
                    Game.intelligence.MoveMachin(nearGoal.yArrow, 'steve')
                    Y_Repeat--;
                }
            }, Game.Move.Speed);
        },

        RunIntelligenceMachin: function (PostionparseId) {
            debugger;
            var nearGoal = Game.intelligence.FindDistenceOfGoals(PostionparseId);
            if (nearGoal == null && Game.BillGatesWon != true) {
                //alert('Steve Jobs Won!');
                Game.GameOver('steve');
                // location.reload();
            }
            Game.intelligence.MoveInX(nearGoal);
        },

        MoveMachin: function (Postion, EnemyClass) {
            if (Postion == 39) {
                var PostionInfo = Game.Move.right(EnemyClass, Game.oldstevePostionparseId, Game.stevePostionparseId);
                Game.oldstevePostionparseId = PostionInfo.oldPostionparseId;
                Game.stevePostionparseId = PostionInfo.PostionparseId;
            }
            if (Postion == 37) {
                var PostionInfo = Game.Move.left(EnemyClass, Game.oldstevePostionparseId, Game.stevePostionparseId);
                Game.oldstevePostionparseId = PostionInfo.oldPostionparseId;
                Game.stevePostionparseId = PostionInfo.PostionparseId;
            }
            if (Postion == 40) {
                var PostionInfo = Game.Move.down(EnemyClass, Game.oldstevePostionparseId, Game.stevePostionparseId);
                Game.oldstevePostionparseId = PostionInfo.oldPostionparseId;
                Game.stevePostionparseId = PostionInfo.PostionparseId;
            }
            if (Postion == 38) {
                var PostionInfo = Game.Move.up(EnemyClass, Game.oldstevePostionparseId, Game.stevePostionparseId);
                Game.oldstevePostionparseId = PostionInfo.oldPostionparseId;
                Game.stevePostionparseId = PostionInfo.PostionparseId;
            }
        },

        FindDistenceOfGoals: function (PostionparseId) {
            debugger;
            var AllGoal = $('.Goal');
            var AllDistenceVertex = [{}];
            var TotalDistence = [];
            for (var i = 0; i < AllGoal.length; i++) {
                var GoalId = parseInt($(AllGoal[i]).attr('Id'));
                var Distence = Game.intelligence.GetDistence(PostionparseId, GoalId)
                AllDistenceVertex.push({
                    x: Distence.x, y: Distence.y,
                    xArrow: Distence.xArrow, yArrow: Distence.yArrow,
                    GoalId: GoalId, TotalDistence: Distence.x + Distence.y
                });
                TotalDistence.push(Distence.x + Distence.y);
            }
            var xs = Math.min.apply(Math, TotalDistence);
            var nearElement = Game.intelligence.FindElement(AllDistenceVertex, xs);
            return nearElement;
        },

        FindElement: function (Array, Postion) {
            var target;
            for (var i = 0; i < Array.length; i++) {
                if (Array[i].TotalDistence == Postion) {
                    target = {
                        x: Array[i].x, y: Array[i].y,
                        xArrow: Array[i].xArrow, yArrow: Array[i].yArrow,
                        GoalId: Array[i].GoalId, TotalDistence: Array[i].TotalDistence
                    };
                    break;
                }
            }
            return target;
        },

        GetDistence: function (PockManPostion, GoalPostion) {
            //39 asci code is right;
            //37 asci code is left;
            //38 asci code is up
            //40 asci code is down
            var X_Arrow;
            var Y_Arrow
            var VerticalDistence = Game.intelligence.Get_TR_ID(GoalPostion) - Game.intelligence.Get_TR_ID(PockManPostion);
            if (VerticalDistence > 0)
                Y_Arrow = 40
            else
                Y_Arrow = 38
            var horizontalDistence = GoalPostion - Math.abs((PockManPostion + (VerticalDistence * Game.horizontalCell)));
            if (horizontalDistence > 0)
                X_Arrow = 39
            else
                X_Arrow = 37
            return { x: Math.abs(horizontalDistence), y: Math.abs(VerticalDistence), xArrow: X_Arrow, yArrow: Y_Arrow }
        },

        Get_TR_ID: function (element) {
            return parseInt($('#' + element).parent('tr').attr('Id'));
        }
    }
}
//-----------------------Events--------------------------
$(document).keydown(function (event) {

    e = event;
    console.log(this, e.target);
    var key = e.charCode || e.keyCode;
    if (key == 16 || key == 32 || key == 33 || key == 34 || key == 35 || key == 36 || key == 37 || key == 38 || key == 39 || key == 40) {
        e.preventDefault();
    } else { }


    if (event.which == 39) {
        
        var leftPos = $('body').scrollLeft();
        console.log(leftPos);
        $("body").animate({
            scrollLeft: leftPos + 100
        }, 200);

        Game.Move.LastMoveKey = 39;
        var PostionInfo = Game.Move.right('tmpon', Game.oldPockManPostionparseId, Game.pockManPostionparseId);
        Game.oldPockManPostionparseId = PostionInfo.oldPostionparseId;
        Game.pockManPostionparseId = PostionInfo.PostionparseId;
        Game.Move.BillGateGoal(Game.pockManPostionparseId, 'BillGoal');
        e.preventDefault();

    }
    if (event.which == 37) {

        var leftPos = $('body').scrollLeft();
        console.log(leftPos);
        $("body").animate({
            scrollLeft: leftPos - 100
        }, 200);

        Game.Move.LastMoveKey = 37;
        var PostionInfo = Game.Move.left('tmpon', Game.oldPockManPostionparseId, Game.pockManPostionparseId);
        Game.oldPockManPostionparseId = PostionInfo.oldPostionparseId;
        Game.pockManPostionparseId = PostionInfo.PostionparseId;
        Game.Move.BillGateGoal(Game.pockManPostionparseId, 'BillGoal');
        e.preventDefault();

    }

    if (event.which == 40) {
        Game.Move.LastMoveKey = 40;
        var PostionInfo = Game.Move.down('tmpon', Game.oldPockManPostionparseId, Game.pockManPostionparseId);
        Game.oldPockManPostionparseId = PostionInfo.oldPostionparseId;
        Game.pockManPostionparseId = PostionInfo.PostionparseId;
        Game.Move.BillGateGoal(Game.pockManPostionparseId, 'BillGoal');
        e.preventDefault();
    }

    if (event.which == 38) {
        Game.Move.LastMoveKey = 38;
        var PostionInfo = Game.Move.up('tmpon', Game.oldPockManPostionparseId, Game.pockManPostionparseId);
        Game.oldPockManPostionparseId = PostionInfo.oldPostionparseId;
        Game.pockManPostionparseId = PostionInfo.PostionparseId;
        Game.Move.BillGateGoal(Game.pockManPostionparseId, 'BillGoal');
        e.preventDefault();
    }
});